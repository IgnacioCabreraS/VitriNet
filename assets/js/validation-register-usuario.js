$("#formulario").validate({

    rules: {
        input_nombre: {
            required: true,
            solo_letras: true,
            dos_nombres: true,
            minlength: 3
        },
        input_usuario: {
            required: true,
            minlength: 4
        },
        email: {
            required: true,
            email: true
        },
        telefono: {
            required: true,
            digits: true,
            rangelength:[9,9]
        },
        contrasenya: {
            required: true,
            minlength: 8
        },
        confirmacion_contrasenya: {
            required: true,
            equalTo: "#contrasenya"
        },
        region: {
            required: true,
            solo_letras: true
        },
        codigo: {
            required: true,
            digits: true,
            rangelength:[7,10]
        }
        },
        messages: {
            input_nombre: {
            required: "Por favor, ingrese su nombre y apellido.",
            dos_nombres: "Nombre y Apellido",
            minlength: "El nombre y apellido deben tener al menos 3 caracteres."
            },
            input_usuario: {
            required: "Por favor, ingrese su nombre de usuario.",
            minlength: "El nombre de usuario debe tener al menos 4 caracteres."
            },
            email: {
            required: "Por favor, ingrese su correo electrónico.",
            email: "Por favor, ingrese un correo electrónico válido."
            },
            telefono: {
                required: "Por favor, ingrese su número de teléfono.",
                digits: "Por favor, ingrese sólo dígitos.",
                rangelength: "debe tener 9 numeros"
            },
            contrasenya: {
                required: "Por favor, ingrese su contraseña.",
                minlength: "La contraseña debe tener al menos 8 caracteres."
            },
            confirmacion_contrasenya: {
                required: "Por favor, confirme su contraseña.",
                equalTo: "Las contraseñas no coinciden."
            },
            region: {
                required: "Por favor, ingrese su región."
            },
            codigo: {
                required: "Por favor, ingrese su código postal.",
                digits: "Por favor, ingrese sólo dígitos.",
                rangelength: "Por favor, el tango es de 7 a 10 digitos"
            },
        },
        submitHandler: function (form) {
            form.submit();
            alert(" Registro bien");
        }   
    }); 


/* METODOS SACADOS DE jqueryvalidation.org */

jQuery.validator.addMethod("dos_nombres", function(value, element) {
    return /\s/.test(value);
  }, "Nombre y Apellido");

jQuery.validator.addMethod("solo_letras", function(value, element) {
    return /[a-z]/.test(value);
},  "Solo puede ingresar letras");
jQuery.validator.addMethod ("email",function( value, element ) {
    return /[a-z]+@[a-z]+\.[a-z]+/.test( value );
}, "email");