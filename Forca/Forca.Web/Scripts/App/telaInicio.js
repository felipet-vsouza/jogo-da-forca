class TelaInicio {

    constructor(seletor) {
        if (!!forca.player.name) {
            let playa = forca.player;
            $.post('/api/jogador', {
                Nome: playa.name,
                Pontuacao: playa.points,
                Dificuldade: playa.dificulty
            });
            forca.player = new Player();
        }
        this.$elem = $(seletor);
        this.renderizarEstadoInicial();
    }

    registrarBindsEventos() {
        this.$formNome = $('#formNome');
        this.$btnSubmit = this.$formNome.find('button[type=submit]');
        this.$inputNome = this.$formNome.find('input[type=text]');
        this.$btnSubmit.text('Entrar');
        let self = this;
        let validator = this.$formNome.validate({
            highlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            showErrors: function () {
                if (validator.numberOfInvalids() === 0) {
                    self.$btnSubmit.removeAttr('disabled');
                } else {
                    self.$btnSubmit.attr('disabled', true);
                }
                this.defaultShowErrors();
            },
            submitHandler: function () {
                self.$btnSubmit.text('Carregando...');
                self.$btnSubmit.attr('disabled', true);
                var dificuldade = self.$formNome.find('input[name=dif]:checked').val();
                var nome = self.$inputNome.val();
                dificuldade = parseInt(dificuldade);
                forca.player.name = nome;
                forca.player.dificulty = dificuldade;
                setTimeout(function () {
                    forca.renderizarTela('jogo');
                }, 2000);
            }
        });
    }

    renderizarEstadoInicial() {
        $('.tela-centralizada').removeClass('tela-centralizada');
        this.$elem.show();

        let self = this;
        let renderizar = forca.render('.tela', 'inicio', {});
        renderizar.then(() => {
            self.registrarBindsEventos();
            self.$btnSubmit.attr('disabled', !self.$formNome.valid());
        });
    }

}