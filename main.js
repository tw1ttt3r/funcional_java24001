// mutabilidad e inmutabilidad

// metodo que me permite agregar un nuevo elemento al arreglo
// let numeros = [];

// numeros.push(5);

// numeros.push(10);

// numeros.push(15);

// console.log("numeros", numeros); //[ 5, 10, 15 ]

// let numeros1 = [ ...numeros, 5 ];
// let numeros2 = [ ...numeros1, 10 ];
// let numeros3 = [ ...numeros2, 15 ];

// console.log("numeros", numeros3); //[ 5, 10, 15 ]


// efecto secundario

// let resultado = 0;

function sumadenumeros(a,b) {
  // resultado = a+b;
  return a+b
}

let resultado = sumadenumeros(9,8);


//  funciones puras

function potencia(base, exponente) { // 2 * 2 
  // let resultado = base;
  // for(let i = 1;i == exponente; i++) {
  //   resultado += resultado * base;
  // }
  // return resultado
  return Math.pow(base, exponente)
}
console.log(potencia(2,2)); // 4

console.log(potencia(4,6)); // 4096
console.log(potencia(3,7)); // 2187
console.log(potencia(3,7)); // 2187


// metodos funcionales
// arreglos

// callbacks

// foreach

const nombres = ["Pedro", "manuel", "antonio", "gabriela", "camila"];

for (let i = 0; i< nombres.length; i++) {
  console.log(nombres[i])
}

nombres.forEach((elemento, posicion, arreglo) => {
  console.log(elemento)
  console.log(posicion)
  console.log(arreglo)
});

// "Pedro"
// 0
// ["Pedro", "manuel", "antonio", "gabriela", "camila"]
// "manuel"
// 1
// ["Pedro", "manuel", "antonio", "gabriela", "camila"]
// "antonio"
// 2
// ["Pedro", "manuel", "antonio", "gabriela", "camila"]
// "gabriela"
// 3
// ["Pedro", "manuel", "antonio", "gabriela", "camila"]
// "camila"
// 4
// ["Pedro", "manuel", "antonio", "gabriela", "camila"]


// map
// metodo funcional que me va a permitir recorrer el arreglo y regresarme un 
// nuevo arreglo del mismo numero de elementos con posiblemente
// el mismo contenido

// Array.map((elemento, posicion, arreglo) => {})

let calificaciones = [10,10,9,8,7.5,5,7,8];
// cualquier calificacion menor que 8 reprueba

const deliberaciones = calificaciones.map((calificacion, posicion, arreglo) => {
  if (calificacion >= 8) {
    return "Aprobado"
  }
  return "Reprobado";
});

console.log(deliberaciones); // ["Aprobado", "Aprobado", "Aprobado", "Aprobado", "Reprobado", "Reprobado", "Reprobado", "Aprobado"]

// filter
// metodo funcional que me permite filtrar el contenido de un arreglo
// regresa un arreglo del mismo numero de elemento, menor cantidad de elementos o ningun elemento
// si con el mismo contenido

// Array.filter((elemento, posicion, arreglo) => {});

// solo obtener las calificaciones aprobatorios
// cualquier calificacion menor que 8 reprueba

const aprobadas = calificaciones.filter((calificacion, posicion, arreglo) => {
  if (calificacion >= 8) {
    return calificacion
  }
});

console.log(aprobadas) // [ 10,10,9,8,8 ]


// reduce
// metodo que me permite regresar cualquier tipo de dato valido en javascript
// de un arreglo yo puedo regresar cualquier tipo de valor

// Array.reduce((acum, elemento, posicion, arreglo) => {}) 
// Array.reduce((acum, elemento, posicion, arreglo) => {}, valorinicial)

// valorinicial define el tipo de dato que me regresará al final

// si yo defino el segundo parametro (valorinicial), en mi callback, el primer parametro
// en la primera iteración será el valorinicial,
//  en mi segundo parametro recibire el valor de la posicion 0 de mi arreglo original

// let calificaciones = [10,10,9,8,7.5,5,7,8];

// calificaciones.reduce((acum, elemento, posicion, arreglo) => {
//  return acum+elemento // 0+10
//}, 0)

// calificaciones.reduce((acum, elemento, posicion, arreglo) => {
//  return acum+elemento // 10+10 
//}, 0)

// calificaciones.reduce((acum, elemento, posicion, arreglo) => {
//  return acum+elemento // 20+9
//}, 0)


// si yo no defino el segundo parametro, en mi callback, en la primera iteracion
// el primer parametro recibe la posicion 0 de mi arreglo
// el segundo parametro de mi callback, recibe la posicion  1 de mi arreglo

// para mis siguientes iteraciones
// el primer parametro de mi callback, recibe lo que retorno el callback
// el segundo parametro de mi callback, recibe la siguiente posición iterable

// let calificaciones = [10,10,9,8,7.5,5,7,8];

// calificaciones.reduce((acum, elemento, posicion, arreglo) => {
//  return acum+elemento // 10+10 = 20
//})

// calificaciones.reduce((acum, elemento, posicion, arreglo) => {
//  return acum+elemento // 20+9
//})

const alumnos = [
  {
    nombre: "Pedro",
    materias: [
      {
        nombre: "Español",
        calificacion: 7
      },
      {
        nombre: "Ciencias",
        calificacion: 10
      },
      {
        nombre: "Historia",
        calificacion: 8
      },
    ],
    grado: "4",
    grupo: "A"
  },
  {
    nombre: "Gabriela",
    materias: [
      {
        nombre: "Español",
        calificacion: 9
      },
      {
        nombre: "Matematicas",
        calificacion: 9
      },
      {
        nombre: "Historia",
        calificacion: 10
      },
    ],
    grado: "4",
    grupo: "B"
  },
  {
    nombre: "Rodolfo",
    materias: [
      {
        nombre: "Ingles",
        calificacion: 9
      },
      {
        nombre: "Ciencias",
        calificacion: 8
      },
      {
        nombre: "Matematicas",
        calificacion: 10
      },
    ],
    grado: "5",
    grupo: "A"
  },
  {
    nombre: "Rodrigo",
    materias: [
      {
        nombre: "Español",
        calificacion: 9
      },
      {
        nombre: "Historia",
        calificacion: 9
      },
      {
        nombre: "Ingles",
        calificacion: 10
      },
    ],
    grado: "5",
    grupo: "B"
  },
  {
    nombre: "Gustavo",
    materias: [
      {
        nombre: "Español",
        calificacion: 8
      },
      {
        nombre: "Ingles",
        calificacion: 6
      },
      {
        nombre: "Ciencias",
        calificacion: 10
      },
    ],
    grado: "5",
    grupo: "B"
  },
  {
    nombre: "Cristian",
    materias: [
      {
        nombre: "Ingles",
        calificacion: 8
      },
      {
        nombre: "Matematicas",
        calificacion: 9
      },
      {
        nombre: "Español",
        calificacion: 10
      },
    ],
    grado: "6",
    grupo: "B"
  },
];

// Requerimos conocer los alumnos de los grupos B
const gruposb = alumnos.filter((alumno) => alumno.grupo === 'B');
console.log("gruposb", gruposb)

// Requerimos conocer los alumnos que cursan Matematicas
const gruposmatematicas = alumnos.filter((alumno) => {
  const existe = alumno.materias.filter((materia) => materia.nombre === 'Matematicas')
  return !!existe.length
});
console.log("gruposmatematicas", gruposmatematicas)

// Requerimos conocer el nombre de todos los alumnos
const nombreAlumnos = alumnos.map((alumno) => alumno.nombre);
console.log("nombreAlumnos", nombreAlumnos);



// Requerimos sacar el promedio de todas las materias


// Requerimos conocer el nombre, grado y grupo de los alumnos que reprobaron ciencias (calificacion menor a 7)

// Requerimos conocer el grupo con mejor promedio



// Requerimos conocer a todos los alumnos que cursan historio, queremos saber que grado, que grupo y cual fue su promedio del alumno
