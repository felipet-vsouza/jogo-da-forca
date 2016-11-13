class Palavra {

    sortearPalavra() {
        var palavraSorteada;
        $.get('/api/palavras')
            .done(function (res) {
                var naoSorteadas = res.dados;

                var indice = Math.ceil(Math.random() * naoSorteadas.length - 1);
                var palavraSorteada = naoSorteadas[indice];

                console.log(palavraSorteada);
                return palavraSorteada;
            });
    }

}