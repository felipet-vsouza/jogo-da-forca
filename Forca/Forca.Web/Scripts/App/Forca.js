﻿let forca = {};

forca.renderizarTela = function (nome) {

    // escondendo todas as telas antes de renderizar a tela correta
    let $subTelas = $('.sub-tela');
    $.each($subTelas, (indice, elem) => $(elem).hide());
    let seletor = '';

    switch (nome) {
        case 'inicio':
            new TelaInicio('#telaInicio');
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
    return forca.renderizarTela('inicio');
};