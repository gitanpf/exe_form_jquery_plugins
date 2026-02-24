$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('#nome').attr('placeholder', 'Nome completo aqui.')

    $('#email').attr('placeholder', 'seuemail@email.com')

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#endereco').attr('placeholder', 'Rua João Pedro, 38, Paraíso - São Paulo')


    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('#form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            cpf: { required: true },
            endereco: { required: true },
            cep: { required: true }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, preencha o campo e-mail.',
            telefone: 'Por favor, insira o seu telefone completo.',
            cpf: 'Por favor, insira o seu CPF.',
            endereco: 'Por favor, digite aqui o seu endereço completo.',
            cep: 'Por favor, digite o seu CEP.'
        },
        submitHandler: function(form) {
            console.log("Formulário enviado com sucesso!");
            form.submit();
        }
    });
});
