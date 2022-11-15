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
                checaPosicaoNorte(orientacaoRobo, coordenadas[i], comprimento);
            }else if(orientacaoRobo.orientacaoAtual == 'L'){
                checaPosicaoLeste(orientacaoRobo, coordenadas[i], largura);
            }else if(orientacaoRobo.orientacaoAtual == 'S'){
                checaPosicaoSul(orientacaoRobo, coordenadas[i], comprimento);
            }else if(orientacaoRobo.orientacaoAtual == 'O'){
                checaPosicaoOeste(orientacaoRobo, coordenadas[i], largura);
            }
        }    
    }

    return orientacaoRobo;

}

function xyMaiorIgualAZero(orientacaoRobo){
    return orientacaoRobo.y >= 0 && orientacaoRobo.x >= 0;
}

function checaPosicaoNorte(orientacaoRobo, coordenada, comprimento){
    if(coordenada == 'F'){
        if(orientacaoRobo.y < comprimento){
            orientacaoRobo.y = orientacaoRobo.y + 1;
        }
    }else if(coordenada == 'D'){
        orientacaoRobo.orientacaoAtual = 'L';
    }else if(coordenada == 'E'){
        orientacaoRobo.orientacaoAtual = 'O';
    }else if(coordenada == 'T'){
        if(orientacaoRobo.y > 0){
            orientacaoRobo.y = orientacaoRobo.y - 1;
        }
    }
}

function checaPosicaoSul(orientacaoRobo, coordenada, comprimento){
    if(coordenada == 'F'){
        if(orientacaoRobo.y > 0){
            orientacaoRobo.y = orientacaoRobo.y - 1;
        }
    }else if(coordenada == 'D'){
        orientacaoRobo.orientacaoAtual = 'O';
    }else if(coordenada == 'E'){
        orientacaoRobo.orientacaoAtual = 'L';
    }else if(coordenada == 'T'){
        if(orientacaoRobo.y < comprimento){
            orientacaoRobo.y = orientacaoRobo.y + 1; 
        }
    }
}

function checaPosicaoLeste(orientacaoRobo, coordenada, largura){
    if(coordenada == 'F'){
        if(orientacaoRobo.x < largura){
            orientacaoRobo.x = orientacaoRobo.x + 1;
        }
    }else if(coordenada == 'D'){
        orientacaoRobo.orientacaoAtual = 'S';
    }else if(coordenada == 'E'){
        orientacaoRobo.orientacaoAtual = 'N';
    }else if(coordenada == 'T'){
        if(orientacaoRobo.x > 0){
            orientacaoRobo.x = orientacaoRobo.x - 1;
        }
    }
}

function checaPosicaoOeste(orientacaoRobo, coordenada, largura){
    if(coordenada == 'F'){
        if(orientacaoRobo.x > 0){
            orientacaoRobo.x = orientacaoRobo.x - 1;
        }
    }else if(coordenada == 'D'){
        orientacaoRobo.orientacaoAtual = 'N';
    }else if(coordenada == 'E'){
        orientacaoRobo.orientacaoAtual = 'S';
    }else if(coordenada == 'T'){
        if(orientacaoRobo.x < largura){
            orientacaoRobo.x = orientacaoRobo.x + 1;
        }
    }
}

function xMenorQueLargura(x, largura){
    return x < largura;
}

function yMenorQueComprimento(y, comprimento){
    return y < comprimento;
}
