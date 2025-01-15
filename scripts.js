const form = document.querySelector('.formulario-fale-conosco');
const mascara = document.querySelector('.mascara-formulario');
const faleConosco = document.querySelector('#fale-conosco');

function formularioContato() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible"; 
}

function escondeFormulario() {
    
    form.style.left = "-300px";
    form.style.transform = "none";
    mascara.style.visibility = 'hidden';
}

mascara.addEventListener('click', escondeFormulario)
faleConosco.addEventListener('click', formularioContato)