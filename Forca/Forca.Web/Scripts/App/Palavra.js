Palavra = {};
   
    //Método que faz a requisição da palavra já sorteada
        Palavra.sortearPalavra = function (){
            return $.get('/api/palavras');
        }
    //Método de ligação entre a palavra sorteada e o método que verifica se ela ja foi usada.
        Palavra.buscarPalavraSorteada = function(){
            this.sortearPalavra().then(res => 
                this.adicionarPalavraSorteadaAoLocalStorage(res.id,res.composicao)
            )}
        
    //Método que verifica/adiciona palavras ao localStorage.
        Palavra.adicionarPalavraSorteadaAoLocalStorage = function(id, composicao) {
        // Pega os registros que estão no local storage
        var idExistentes = JSON.parse(localStorage.getItem("idPalavras"));
        if (idExistentes === null) idExistentes = [];
        var palavraEncontrada = { Id :id, Composicao : composicao };

        console.log(palavraEncontrada);

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
            palavraSorteada = palavraEncontrada.Composicao;

            localStorage.setItem("idPalavras", JSON.stringify(idExistentes));

            console.log('PL ' + palavraSorteada);
            return palavraSorteada;
        }
        
      };

    Palavra.esconderPalavra = function(palavra) {
        return palavra.replace(/\S/g, '-');
    }
    Palavra.sortearPalavra().done(res => console.log(res.composicao));

    console.log(Palavra.esconderPalavra(Palavra.buscarPalavraSorteada()));