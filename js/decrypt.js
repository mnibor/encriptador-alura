// capturar evento sobre el boton DesencriptarEncriptar
var btnDecrypt = document.querySelector(".btnDecrypt");

btnDecrypt.addEventListener("click", function(event){

    var txtOriginal = document.querySelector("#txtOriginal");
    var txtResult = document.querySelector("#txtResult");

    var textToDecrypt = txtOriginal.value;
    txtOriginal.value = fixErrors(textToDecrypt);
    txtResult.value = decryptText(txtOriginal.value);

});

function fixErrors(text){

    var text = text.toLowerCase();
    text = text.replace(/á/gi, 'a').replace(/é/gi, 'e').replace(/í/gi, 'i').replace(/ó/gi, 'o').replace(/ú/gi, 'u');
    return text;

}

function decryptText(text){
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
     text = text.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
     return text;
}
