//Buscar google
//Buscamos el input text llamado q y le escribimos el texto que queremos buscar, en este caso tilin
document.querySelector('input[name="q"]').value = "tilin";

//creamos el evento click
var event = new MouseEvent('click', {

    bubbles: true,
    cancelable: true,
    view: window


});

//si no se cancela el evento lo ejecutamos
var cancel = !document.querySelector('input[name="btnK"]').dispatchEvent(event);