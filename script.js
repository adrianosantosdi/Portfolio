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

