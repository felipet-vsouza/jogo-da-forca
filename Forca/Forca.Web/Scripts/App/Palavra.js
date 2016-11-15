class Palavra {
    constructor(onRenderSuccessful) {
        this.onRenderSuccessful = onRenderSuccessful;
        this.buscarPalavraSorteada();
    }

    palavraDescoberta() {
        if (this.palavra.toUpperCase() === this.palavraOculta.toUpperCase())
            return true;
        return false;
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
        return $.get('/api/palavras').catch((err) => {
            console.error('Erro na comunicação com o servidor');
            console.error(`${err.responseJSON.code} - ${err.responseJSON.message}`);
        });
    }

    //Método que verifica/adiciona palavras ao localStorage. 
    adicionarPalavraSorteadaAoLocalStorage(id, composicao) {
        // Pega os registros que estão no local storage
        var idExistentes = JSON.parse(localStorage.getItem("idPalavras"));
        if (idExistentes === null) idExistentes = [];
        var palavraEncontrada = { Id: id, Composicao: composicao };
        //Percorre o array de IDs Existentes: caso o id já esteja registrado retorna ao método de buscarPalavra
        //senão adiciona novo id e retorna a palavra adicionada
        var jaFoiUsada = !!idExistentes.find(idE => idE === id);
        //Se o jogo estiver na dificuldade BH, a palavra deve possuir 12 ou mais caracteres
        var competeComDificuldade = forca.player.dificulty == 1 || composicao.length >= 12;
        if (jaFoiUsada || !competeComDificuldade) {
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

    renderSelf() {
        forca.render('.palavra', 'palavra', {
            palavraOculta: this.palavraOculta,
            dica: this.dica
        }).then(p => this.onRenderSuccessful());
        forca.render('.hud', 'hud', {
          pontos: forca.player.points,
          nome: forca.player.name,
          dificuldade: forca.player.dificulty == 1 ? 'Normal' : 'BH'
        });
    }

}