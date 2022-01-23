// capturar evento sobre el boton Encriptar
var btnEncrypt = document.querySelector(".btnEncrypt");

btnEncrypt.addEventListener("click", function(event){

    var txtOriginal = document.querySelector("#txtOriginal");
    var txtResult = document.querySelector("#txtResult");

    var textToEncrypt = txtOriginal.value;

    //Corrijo posible entrada de mayúsculas y convierto letras acentuadas a caracteres normales
    txtOriginal.value = fixErrors(textToEncrypt);

    //Encripto la cadena resultante
    txtResult.value = encryptText(txtOriginal.value);

});

function fixErrors(text){

    //Función para colocar todo en minúsculas y cambiar acentos
    var text = text.toLowerCase();
    text = text.replace(/á/gi, 'a').replace(/é/gi, 'e').replace(/í/gi, 'i').replace(/ó/gi, 'o').replace(/ú/gi, 'u');
    return text;
}

function encryptText(text){

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

     text = text.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
     return text;

}
