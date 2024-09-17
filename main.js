let cantidad = document.getElementById('cantidad');
/*el id dentro de document.get..  es el id del html*/
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-';

function generar(){

    let numeroDigital = parseInt ( cantidad.value); 

    if( numeroDigital < 8){
        alert( "LA CANTIDAD DE CARACTERES DEBE SER MAYOR A 8");
    }
    
    let password = '';
    for(let i =0; i < numeroDigital; i++ ){

        let caracterAleatorio = cadenaCaracteres[ Math.floor(Math.random() * cadenaCaracteres.length)];

        password+=caracterAleatorio;

    }

    contrasena.value = password;

    if (tieneMayusculas(password) && tieneEspeciales(password) && tieneNumeros(password)) { //condicioinales  para verificar si tiene al menos un caracter de cada tipo alert password segura
        mensaje.textContent = 'Contraseña segura';
        mensaje.style.color ='green';
        mensaje.style.fontSize = '50px';

    } else {
        mensaje.textContent = 'Contraseña insegura';
        mensaje.style.color = 'red';
        mensaje.style.fontSize = '50px';
    }

}

function tieneMayusculas(password) {
    return /[A-Z]/.test(password); //   /[A-Z]/.test(contaseña) revisa entre todo el abecedario en mayusculas

}

function tieneEspeciales(password) {
    return /[!@#$%^&*()]/.test(password); //   /[!@#$%^&*()]/.test(password) revisa si hay al menos un caracter especial esta en la password

}

function tieneNumeros(password) {

    return /[0-9]/.test(password); //   /[0-9]/.test(password) revisa si hay al menos un caracter numerico esta en la password

}

function limpiar() { //borra los valores de password y cantidad
    contrasena.value = '';
    cantidad.value = '';

}


 





