/*  Variables 
String: sirve para texto, se escribe entre ' '. Ej: let NombreDeLaVariable = 'Paco';
Number: sirve para numeros. Ej: let NombreDeLaVariable = 1;
Boolean: diferenciar valores entre true/false. Ej: let NombreDeLaVariable = true;
Array: permite almacenar varios valores. Ej: let NombreDeLaVariable = ['Paco', 1, true, 'Molort'];. Para especificar: let NombreDeLaVariable[0], let NombreDeLaVariable [1]...
Object: Sirve para todo. Ej: let NombreDeLaVariable = document.querySelector('h1');
    Operadores
Suma: + (sirve pa' sumar)
Resta: - (sirve pa' restar)
Multiplicación: * (sirve pa' multiplicar)
División: / (sirve pa' dividir)
Igual: = (sirve pa' corresponder datos)
Igualdad: === (sirve pa' comprobar si el valor asignado es correcto)
Negación: ! (sirve pa' cambiar el valor de true/false)
    Condicionales
If: da un resultado si lo asignado es correcto
Else: Si el resultado asignado no es correcto opta por esta otra opción */

function suma(num2,num1){
    let resulsuma = num1 + num2;
    return resulsuma;
}
suma(2,3);
suma(6,7);
suma(23,245);
function multiplicar(num1,num2){
    let resulmult = num1 * num2
    return resulmult
}
let miHTML = document.querySelector('a');
miHTML.onclick = function(){
    alert ('Nos vamos pa la wiki mano')
}

let miImagen = document.querySelector('img');
miImagen.onclick = function() {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'C:\Users\elmec\OneDrive\Escritorio\todo\fotos y videos\supernenas.jpg') {
        miImagen.setAttribute('src','C:\Users\elmec\OneDrive\Imágenes\imagenFurro.jpg');
    } else {
        miImagen.setAttribute('src','C:\Users\elmec\OneDrive\Escritorio\todo\fotos y videos\supernenas.jpg')
    }
}
let boton = document.querySelector('button')
let titulo = document.querySelector('h1')
function EstableceNombreUsuario(){
    let nombre = prompt ('Ingrese su nombre aquí.');
    if(!nombre) {
        EstableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', nombre);
        titulo.innerHTML = 'Su nombre es ' + nombre;
    }
}
if (!localStorage.getItem('nombre')) {
    EstableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    titulo.textContent = 'Su nombre es ' + nombreAlmacenado 
}
boton.onclick = function() {
    EstableceNombreUsuario();
}