// Escribe tu código aquí.

/*
Notas de la entrevistadora (Yeimi):
Paty Piña - Límite 14:09
13:29 Comienza a clonar repo
Explica cada paso de lo que está realizando.
13.31 Clonado
Lee instrucciones para entenderlas primero
13:33
Comienza por cada instrcción para comenzar a realizar en VSC
Revisa apuntes para ubicar los conceptos
Realiza paso por paso explicando y entendiendo lo que está realizando
Prueba su código 
Analiza los errores
Realiza las modificaciones que considera necesarias.

*/

function palabraslargas() {
    var parametro1 = "patata";
    var parametro2 = ["hi", "color", "manzana", "naranja", "platano", "mandarina", "sandia", "chayote", "zanahoria", "jicama"];
    var palabralarga = [];
    for (var i = 0; i < parametro2.length; i++) {
        if (parametro2[i].length > parametro1.length) {
            palabralarga.push(parametro2[i]);
        } else {
            console.log("La palabra " + parametro2[i] + " es más corta o igual de larga que " + parametro1);
        }
    }
    console.log(palabralarga);

    return palabralarga;
}

palabraslargas();

/* No funcionó esta manipulación del DOM para pintar el HTML :(

var palabralargaReturn = palabraslargas();
console.log(palabralargaReturn);
 
palabralargaReturn = document.querySelector('.palabra');
*/


/*
var palabralarga = document.querySelector('.palabra');
*/



/* Código con muchos ifs porque no funcionaba el ciclo for

function palabraslargas() {
    var parametro1 = "patata";
    var parametro2 = ["hi", "color", "manzana", "naranja", "platano", "mandarina", "sandia", "chayote", "zanahoria", "jicama"];
    var palabralarga = [];
    if (parametro2[0].length > parametro1.length) {
        palabralarga.push(parametro2[0]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[1].length > parametro1.length) {
        palabralarga.push(parametro2[1]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[2].length > parametro1.length) {
        palabralarga.push(parametro2[2]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[3].length > parametro1.length) {
        palabralarga.push(parametro2[3]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[4].length > parametro1.length) {
        palabralarga.push(parametro2[4]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[5].length > parametro1.length) {
        palabralarga.push(parametro2[5]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[6].length > parametro1.length) {
        palabralarga.push(parametro2[6]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[7].length > parametro1.length) {
        palabralarga.push(parametro2[7]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[8].length > parametro1.length) {
        palabralarga.push(parametro2[8]);
    } else {
        console.log("La palabra es más corta");
    }
    if (parametro2[9].length > parametro1.length) {
        palabralarga.push(parametro2[9]);
    } else {
        console.log("La palabra es más corta");
    }
    console.log(palabralarga);
 
    return palabralarga;
}
 
palabraslargas();
 
var palabralargaReturn = palabraslargas();
console.log(palabralargaReturn);
 
palabralargaReturn = document.querySelector('.palabra');
*/


/*
var palabralarga = document.querySelector('.palabra');
*/





