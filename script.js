let quantidade = $('div#testemunhos ul').length;
let limite = (quantidade * 336) * -1;
let largura = limite + 336;
let viewLargura = $('section#testemunha div#testemunha-centro').width();

$('div#testemunhos').css('width', limite * -1);

$('div#testemunha-direita').click(function () {
    posicaoAtual = $('div#testemunhos').position().left;
    novaPosicao = posicaoAtual - viewLargura;

    if (limite < posicaoAtual - viewLargura) {

        $('div#testemunhos').animate({ left: novaPosicao }, 1000);

    }

    if (limite > (novaPosicao - viewLargura)) {
        $('div#testemunha-direita ion-icon').css('opacity', 0.5);
        $('div#testemunha-direita ion-icon').css('cursor', 'not-allowed');
    }

    $('div#testemunha-esquerda ion-icon').css('opacity', 1);
    $('div#testemunha-esquerda ion-icon').css('cursor', 'pointer');
})

$('div#testemunha-esquerda').click(function () {
    posicaoAtual = $('div#testemunhos').position().left;

    if (posicaoAtual + viewLargura <= 0) {
        novaPosicao = posicaoAtual + viewLargura;
        $('div#testemunhos').animate({ left: novaPosicao }, 1000);
    }

    if (novaPosicao == 0) {
        $('div#testemunha-esquerda ion-icon').css('opacity', 0.5);
        $('div#testemunha-esquerda ion-icon').css('cursor', 'not-allowed');
    }

    $('div#testemunha-direita ion-icon').css('opacity', 1);
    $('div#testemunha-direita ion-icon').css('cursor', 'pointer');
})

$('div.planos-bottom').click(function() {
    alert('Clicou');
})

$('ion-icon#instagram').click(function() {
    window.open('https://www.instagram.com.br', '_blank')
})

$('div#testemunhos ul:eq(0)').css('opacity', 0)
$('div#testemunhos ul:eq(1)').css('opacity', 0)
$('div#testemunhos ul:eq(2)').css('opacity', 0)

$('section#domingo-perfeito').waypoint(function(direcao) {
    if (direcao == 'down') {
        $('div.folha1').addClass('animate__animated animate__fadeInUp')
        $('div.folha3').addClass('animate__animated animate__fadeInUp')
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower')
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower')
    }

    if (direcao == 'up') {
        $('div.folha1').removeClass('animate__animated animate__fadeInUp')
        $('div.folha3').removeClass('animate__animated animate__fadeInUp')
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower')
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower')
    }
}, {
    offset:'450px;'
})

$('section#pizza').waypoint(function(direcao) {

    if (direcao == 'down') {
        $('section#pizza p').addClass('animate__animated animate__fadeInUp')
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow')
    }

    if (direcao == 'up') {
        $('section#pizza p').removeClass('animate__animated animate__fadeInUp')
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow')   
    }

}, {
   offset:'450px' 
})

$('section#testemunha').waypoint(function(direcao) {

    if (direcao == 'down') {
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower')
    }

    if (direcao == 'up') {
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower')
    }

},{
   offset:'400px;' 
})

$('div#transicao-testemunho-plano').waypoint(function(direcao) {

    if (direcao == 'down') {
        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate_slow')
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate_slow')
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate_slow')
    }else {
        $('div#decoracao1').removeClass('animate__animated animate__fadeInLeft animate_slow')
        $('div#decoracao2').removeClass('animate__animated animate__fadeIn animate_slow')
        $('div#decoracao3').removeClass('animate__animated animate__fadeInRight animate_slow')
    }

},{
    offset:'800px;'
})

$('section#plano-principal').waypoint(function(direcao) {

    if (direcao == 'down') {
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate_slow')
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate_slow')
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate_slower')
    }else {
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate_slow')
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate_slow')
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate_slower')
    }

},{
    offset:'450px;'
})

$('footer').waypoint(function(direcao) {
    if (direcao == 'down') {
        $('div#mapa').addClass('animate__animated animate__fadeIn')
        $('div#info').addClass('animate__animated animate__fadeIn')
        $('div#pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn')
    } else {
        $('div#mapa').removeClass('animate__animated animate__fadeIn')
        $('div#info').removeClass('animate__animated animate__fadeIn')
        $('div#pizza-rodape-decoracao').removeClass('animate__animated animate__fadeIn')
    }
},{
    offset:'650px;'
})

function mostrarMenu() {
    $('nav ul#esquerda').css('display', 'flex')
    $('nav ul#direita').css('display', 'flex')
}

function esconderMenu() {
    $('nav ul#esquerda').css('display', 'none')
    $('nav ul#direita').css('display', 'none')
}

let controle = true

$('nav ul#icone-menu-mobile').click(function() {
    if (controle == true) {
        mostrarMenu()
        controle = false
    }else {
        esconderMenu()
        controle = true
    }
    
})