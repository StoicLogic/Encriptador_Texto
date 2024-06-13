const textoIngresado = document.querySelector(".mensaje");
const textoResultado = document.querySelector(".mensaje-cifrado");

const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");

function encriptar (){
  var texto = textoIngresado.value.toLowerCase();
  var textoEncriptado = texto
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");


  textoResultado.value = textoEncriptado;

  document.querySelector(".mensaje").value = '';

}

function desencriptar (){
  var textoEncriptado = textoIngresado.value.toLowerCase();
  var texto = textoEncriptado
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");


  textoResultado.value = texto;

  document.querySelector(".mensaje").value = '';

}

function copiar () {
  var textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.addEventListener('click',()=>{
  encriptar();
  textoResultado.classList.remove('texto-vacio')
})

btnDesencriptar.addEventListener('click',()=>{
  desencriptar();
  textoResultado.classList.remove('texto-vacio')
})

 btnCopiar.addEventListener('click',copiar)
