const btnsim = documento.getelementbyid("btnsim")
const btnnao = documento.getelementbyid("btnnao")
function aceitar(){
alert("voce aceitou namorar comigo!:)")
location.href = "https://www.youtube.com/watch?v=t7M89YJAPhM"
}
function desviar(){
    btnnao.style.position = "absolute";
}
function geraposicao(min, max){
    return (Math.random()* (max-min)+min)+ "%";
}