document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(event) {
    event.preventDefault();
    const inputUsuario = document.getElementById('input_usuario');
    const contrasenya = document.getElementById('contrasenya');

    if (!validarEmail(inputUsuario.value)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    if (contrasenya.value.trim() === '' || contrasenya.value.length < 6) {
        alert('Por favor, ingrese una contraseña válida de al menos 6 caracteres.');
        return;
    }

    alert('Inicio de sesión exitoso.');

}

function validarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}