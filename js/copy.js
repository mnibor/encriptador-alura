// capturar evento sobre el boton DesencriptarEncriptar
var btnCopy = document.querySelector(".btnCopy");

btnCopy.addEventListener("click", function(event){
    copyToClipBoard;
});

function copyToClipBoard() {
    var content = document.querySelector('.txtResult');
    content.select();
    document.execCommand('copy');
    alert("Texto copiado satisfactoriamente");
}
