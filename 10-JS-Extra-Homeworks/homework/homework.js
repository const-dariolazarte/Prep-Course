// No cambies los nombres de las funciones.

const { map } = require("@11ty/eleventy/src/TemplateGlob");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const array = Object.entries(objeto);
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  // Seteamos la string para que devuela una sola letra de cada una
  /* const stringSeted = new Set();
  for (const i of string) {
    stringSeted.add(i);
  }

  //Creamos un array a partir del Set
  const array = [];
  for (const item of stringSeted) {
    array.push(item);
  }

  array.sort();       //  lo ordenamos

  const objeto = {};          //  Metemos cada propiedad vacía dentro del objeto
  for (const item of array) {
    objeto[item] = '';
  }

  for (const property in objeto) {          //  Contamos cuantas veces se repite cada propiedad
    let acc = 0;                            //  y la agregamos al objeto
    for (const letter of string) {
      if (property === letter) {
        acc++;
      }
    }
    objeto[property] = acc;
  } */

  let orderedString = string.toLowerCase().split('').sort().join('');

  const objeto = {};
  let acc = 0;

  for (const i of orderedString) {
    for (const j of orderedString) {
      if (i === j) {
        acc++;
      }
    }
    objeto[i] = acc;
    acc = 0;
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜ';
  const lowerCases = 'abcdefghijklmnopqrstuvwxyzáéíóúü';

  const array = [];
  for (const letter of s) {
    for (const upperCase of upperCases) {
      if (letter === upperCase) {
        array.push(upperCase);
      }
    }
  }

  for (const letter of s) {
    for (const lowerCase of lowerCases) {
      if (letter === lowerCase) {
        array.push(lowerCase);
      }
    }
  }
  return array.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(" ").map(element => {
    return element.split("").reverse().join("");
  });

  return array.join(' ');
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroInvertido = numero.toString().split("").reverse().join("");

  return (numero.toString() === numeroInvertido) ? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  /* const array = cadena.split('').filter(filtrarLetras);

  function filtrarLetras(element) {
    if (element === 'a' | element === 'b' | element === 'c') {
      return '';
    }
    return element;
  } */

  const abcLess = 'defghijklmnopqrstuvwxyz';
  const array = [];

  cadena.toLowerCase;

  for (const i of cadena) {
    for (const j of abcLess) {
      if (i === j) {
        array.push(i);
      }
    }
  }

  return array.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a, b) { return a.length - b.length });
  return arr;

}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const arreglo3 = [];

  /* for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        arreglo3.push(arreglo1[i]);
      }
    }
  } */

  arreglo1.forEach(i => {
    arreglo2.forEach(j => {
      if (i === j) {
        arreglo3.push(i);
      }
    });
  });
  return arreglo3;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

