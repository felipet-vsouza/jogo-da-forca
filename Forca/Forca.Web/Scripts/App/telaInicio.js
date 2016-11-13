class TelaInicio {

    constructor(seletor) {
        this.$elem = $(seletor);
        this.renderizarEstadoInicial();
    }

    registrarBindsEventos() {
        this.$formNome = $('#formNome');
        this.$btnSubmit = this.$formNome.find('button[type=submit]');
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