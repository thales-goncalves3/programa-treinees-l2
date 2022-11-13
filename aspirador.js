
console.log(orientacaoFinalRobo(15, 36, 'FFFFFFFFFFFFFFFFDFETTTTTTTTTTTTTTTT'));

function orientacaoFinalRobo(largura, comprimento, coordenadas){

    var orientacaoRobo = {
        'orientacaoAtual': 'N',
        'x': 0,
        'y': 0
    }

    var coordenadas = coordenadas.split('');
    
    for(var i = 0; i < coordenadas.length; i++){
        if(xyMaiorIgualAZero(orientacaoRobo) && xMenorQueLargura(orientacaoRobo.x, largura) && yMenorQueComprimento(orientacaoRobo.y, comprimento)){
            if(orientacaoRobo.orientacaoAtual == 'N'){
                checaPosicaoNorte(orientacaoRobo, coordenadas[i]);
            }else if(orientacaoRobo.orientacaoAtual == 'L'){
                checaPosicaoLeste(orientacaoRobo, coordenadas[i]);
            }else if(orientacaoRobo.orientacaoAtual == 'S'){
                checaPosicaoSul(orientacaoRobo, coordenadas[i]);
            }else if(orientacaoRobo.orientacaoAtual == 'O'){
                checaPosicaoOeste(orientacaoRobo, coordenadas[i]);
            }
        }    
    }

    return orientacaoRobo;

}

function xyMaiorIgualAZero(orientacaoRobo){
    return orientacaoRobo.y >= 0 && orientacaoRobo.x >= 0;
}

function checaPosicaoNorte(orientacaoRobo, coordenada){
    if(coordenada == 'F'){
        orientacaoRobo.y = orientacaoRobo.y + 1;
    }else if(coordenada == 'D'){
        orientacaoRobo.orientacaoAtual = 'L';
    }else if(coordenada == 'E'){
        orientacaoRobo.orientacaoAtual = 'O';
    }else if(coordenada == 'T'){
        orientacaoRobo.y = orientacaoRobo.y - 1;
    }
}

function checaPosicaoSul(orientacaoRobo, coordenada){
    if(coordenada == 'F'){
        orientacaoRobo.y = orientacaoRobo.y - 1;
    }else if(coordenada == 'D'){
        orientacaoRobo.orientacaoAtual = 'O';
    }else if(coordenada == 'E'){
        orientacaoRobo.orientacaoAtual = 'L';
    }else if(coordenada == 'T'){
        orientacaoRobo.y = orientacaoRobo.y + 1;
    }
}

function checaPosicaoLeste(orientacaoRobo, coordenada){
    if(coordenada == 'F'){
        orientacaoRobo.x = orientacaoRobo.x + 1;
    }else if(coordenada == 'D'){
        orientacaoRobo.orientacaoAtual = 'S';
    }else if(coordenada == 'E'){
        orientacaoRobo.orientacaoAtual = 'N';
    }else if(coordenada == 'T'){
        orientacaoRobo.x = orientacaoRobo.x - 1;
    }
}

function checaPosicaoOeste(orientacaoRobo, coordenada){
    if(coordenada == 'F'){
        orientacaoRobo.x = orientacaoRobo.x - 1;
    }else if(coordenada == 'D'){
        orientacaoRobo.orientacaoAtual = 'N';
    }else if(coordenada == 'E'){
        orientacaoRobo.orientacaoAtual = 'S';
    }else if(coordenada == 'T'){
        orientacaoRobo.x = orientacaoRobo.x + 1;
    }
}

function xMenorQueLargura(x, largura){
    return x < largura;
}

function yMenorQueComprimento(y, comprimento){
    return y < comprimento;
}