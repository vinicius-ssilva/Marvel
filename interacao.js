window.onload=iniciar;

var fChris=document.getElementById('imgChris')
var tempo;
var fotosChris=["cris1.jpg","cris2.jpg","cris3.jpg","cris4.jpg","cris5.jpg"]

console.log(fotosChris)

var indice=0

function iniciar(){
rolarFoto()
   

}

function rolarFoto()
{
    tempo=setInterval(avancar,2000)
}

function avancar(){
    if(indice < fotosChris.length-1)
    {
        indice++;
    }
    else{
        indice=0
    }
    mostrarFoto()
}

function mostrarFoto(){

    fChris.src="c/"+fotosChris[indice]

}