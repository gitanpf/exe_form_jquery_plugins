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

    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    });

    $('#nomeCompleto').attr('placeholder', 'Nome completo aqui.')

    $('#email').attr('placeholder', 'seuemail@email.com')

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#veiculoInte').attr('placeholder', 'Modelo XYZ')

    $('#msg').attr('placeholder', 'Digite aqui sua mensagem e em breve entraremos em contato.')


    $('#form-contato').validate({
        rules: {
            nomeCompleto: { required: true },
            email: { required: true, email: true },
            telefoneComDDD: { required: true },
            CampoMensagem: { required: true },
            modeloVeiculo: { required: true }
        },
        messages: {
            nomeCompleto: 'Por favor, insira o seu nome.',
            email: 'Por favor, preencha o campo e-mail.',
            telefoneComDDD: 'Insira o seu telefone completo.',
            CampoMensagem: 'Por favor, insira uma mensagem.',
            modeloVeiculo: 'Digite aqui o modelo desejado.'
        },
        submitHandler: function(form) {
            console.log("Formulário enviado com sucesso!");
            form.submit();
        }
    });

    $('.container-lista button').click(function(){
        const destino = $('#contact');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInte').val(nomeVeiculo);

        $('html, body').animate({ 
            scrollTop: destino.offset().top
        }, 1000);
    });
});