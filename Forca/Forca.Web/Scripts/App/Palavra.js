class Palavra {
    constructor() {
        this.buscarPalavraSorteada();
    }

    //Método de ligação entre a palavra sorteada e o método que verifica se ela ja foi usada. 
    buscarPalavraSorteada() {
        this.sortearPalavra().done(res => {
            this.dica = res.dica;
            this.adicionarPalavraSorteadaAoLocalStorage(res.id, res.composicao);
        })
    }

    //Método que faz a requisição da palavra já sorteada 
    sortearPalavra() {
        return $.get('/api/palavras');
    }

    //Método que verifica/adiciona palavras ao localStorage. 
    adicionarPalavraSorteadaAoLocalStorage(id, composicao) {
        // Pega os registros que estão no local storage
        var idExistentes = JSON.parse(localStorage.getItem("idPalavras"));
        if (idExistentes === null) idExistentes = [];
        var palavraEncontrada = { Id: id, Composicao: composicao };
        var jaFoiUsada = false;
        //Percorre o array de IDs Existentes: caso o id já esteja registrado retorna ao método de buscarPalavra
        //senão adiciona novo id e retorna a palavra adicionada
        for (var ide = 0; ide < idExistentes.length; ide++) {
            var idE = idExistentes[ide];
            if (idE === palavraEncontrada.Id) {
                jaFoiUsada = true;
            }
        }
        if (jaFoiUsada) {
            this.buscarPalavraSorteada();
        } else {
            idExistentes.push(palavraEncontrada.Id);
            localStorage.setItem("idPalavras", JSON.stringify(idExistentes));
            this.palavra = palavraEncontrada.Composicao;
            this.palavraOculta = this.esconderPalavra(palavraEncontrada.Composicao);
            this.renderSelf();
        }
    };

    esconderPalavra(palavra) {
        return palavra.replace(/\S/g, '-');
    }

    mostrarLetras(letra) {
        for (let i = 0; i < this.palavra.length; i++) {
            if (this.palavra.toUpperCase().charAt(i) == letra) {
                this.palavraOculta = this.palavraOculta.replaceAt(i, letra);
            }
        }
        this.renderSelf();
    }

    renderSelf() {
        forca.render('.palavra', 'palavra', {
            palavraOculta: this.palavraOculta,
            dica: this.dica
        });
    }

}