class Palavra {

    sortearPalavra() {
        return new Promise((resolve, reject) => {
            $.get('/api/palavras')
                .done(function (res) {
                    var naoSorteadas = res.dados;

                    var indice = Math.ceil(Math.random() * naoSorteadas.length - 1);
                    var palavraSorteada = naoSorteadas[indice];
    constructor() {
        let self = this;
        this.ready = false;
        this.buscarPalavraSorteada();
    }

                    resolve(palavraSorteada);
                });
        });
    }

    esconderPalavra(palavra) {
        return palavra.replace(/\S/g, '-');
    }

    mostrarLetras(letra) {
        for (let i = 0; i < this.palavra.length; i++) {
            if (this.palavra.charAt(i) == letra) {
                this.palavraOculta = this.palavraOculta.replaceAt(i, letra);
            }
        }
    }

}