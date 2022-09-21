window.onload() = function() {
    let formulario = document.querySelector('.form-register')
    let inputPassword = document.getElementById('password_confirm')
    let listadoErrores = document.querySelector('.errores')

/* 
    const arrayInputs = [inputPassword]


    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        let errores = 0;
        if (inputPassword.value === false) {
            errores++
            listadoErrores.innerHTML += '<li> uyvuv'+ input.dataset.nombre +' </li>'
        }
    })
 */

    function password(input) {
        inputPassword.addEventListener('blur', function() {
            if(input.dataset.nombre == 'contrasenia' && !compararNumero(input.value, 8, 100)) {
                input.nextElementSibling.nextElementSibling.innerHTML = 'El valor debe ser mayor a 8'
            }
        })
    }

    function compararNumero(inputValue, initialValue, finalValue) {
        if(inputValue >= initialValue && inputValue <= finalValue) {
            return true
        }   
        return false

    }

}
