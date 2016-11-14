let forca = {};

forca.renderizarTela = function (nome) {

    // escondendo todas as telas antes de renderizar a tela correta
    let $subTelas = $('.sub-tela');
    $.each($subTelas, (indice, elem) => $(elem).hide());
    let seletor = '';

    $("body").off("keydown");

    switch (nome) {
        case 'inicio':
            forca.subtela = new TelaInicio('#telaInicio');
            break;
        case 'jogo':
            forca.subtela = new TelaJogo('#telaJogo');
            break;
        case 'LeaderBoard':
            forca.subtela = new TelaRanking('#telaRanking');
            break;
    }

}

forca.loadTemplate = function (name) {

    let deferred = $.Deferred();
    $.get(`/static/templates/${name}.tpl.html`).then(
      function (template) {
          deferred.resolve(Handlebars.compile(template));
      }
    );
    return deferred.promise();

}

forca.render = function (viewElementSelector, templateName, data) {

    return new Promise((resolve, reject) => {
        this.loadTemplate(templateName).then(
         function (templateFn) {
             let rendered = templateFn(data);
             $(viewElementSelector).html(rendered);
             resolve();
         }
       );
    });
}

forca.iniciar = function () {
    forca.mainMenu = new MainMenu();
    forca.player = new Player();
    return forca.renderizarTela('inicio');
};

forca.salvarJogador = function () {
    let playa = forca.player;
    $.post('/api/jogador', {
        Nome: playa.name,
        Pontuacao: playa.points,
        Dificuldade: playa.dificulty
    });
};

forca.toggleLoader = () => {
  ['.loader-full'].forEach(seletor => $(seletor).toggle());
};