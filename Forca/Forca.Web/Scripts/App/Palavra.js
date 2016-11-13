class Palavra {

    sortearPalavra() {
        return new Promise((resolve, reject) => {
            $.get('/api/palavras')
                .done(function (res) {
                    var naoSorteadas = res.dados;

                    var indice = Math.ceil(Math.random() * naoSorteadas.length - 1);
                    var palavraSorteada = naoSorteadas[indice];

                    resolve(palavraSorteada);
                });
        });
    }

    esconderPalavra(palavra) {
        return palavra.replace(/\S/g, '-');
    }

}