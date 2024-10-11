//Esto es un comentario de una linea 

/* 
Esto es un comentario 
de varias lineas 
*/

//alerta
//alert("Hola que tal soy una alerta")

//Variables
var nombre="Mariela Vazquez Gonzalez";
let nombre2="Leonardo Vazuqez";
let edad=20;
let estatura=1.80;
let logico=true;

//Mostrar en consola
console.log("Hola estoy en la consola");
console.log("Hola tengo"+edad+"años");

//Mostrar en pantalla 
document.write("Hola estoy en la pantalla <br>");
document.write("<h2>Hola tengo "+edad+" años</h2>");


//Mostrar en pantalla getElementById

let datos=document.getElementById("Informacion");
datos.innerHTML="Hola este es el contenido de innerHTML"
datos.innerHTML+="<hr><h3>Hola soy otro contenido de innerHTML</hr>"
datos.innerHTML+="<hr><h3>Mido: "+estatura+" metros </h3>"
datos.innerHTML+=`
         <br>
         <hr>
         <h1>
            Hola soy contenido de innerHTML mi nombre es: ${nombre}
            <br>y mi estatura es: ${estatura}
         </h1>`;

//Condicionales 
if(edad>=18)
    datos.innerHTML+=`
     <hr>
     soy mayor de edad 
     <hr>
`;
else
  datos.innerHTML+=` <hr>
  soy mayor de edad 
  <hr>
`;

//ciclos
for(let i=1;i<=50;i++)
{
    datos.innerHTML+=`<hr><h3> for El numero es: ${i}</h3> `;
}
while (i<=5)
{
    datos.innerHTML+=`<hr><h3> while El numero es: ${i}</h3> `;
    i++;
}
i=1;
do
{
    datos.innerHTML+=`<hr><h3>Do while El numero es: ${i}</h3> `;
    i++;
}
 while(1<=5);

//funciones 
//1.-Funcion que no recibe parametros y no regres valor 
function suma1()
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    datos.innerHTML+=`<hr><h3>El resultado de la suma1 es : ${suma}</h3> `;
}
suma1();

//2.-Funcion que recibe parametros y regresa valor
function suma2()
{
    let n1=numero1;
    let n2=numero1;
    let suma=n1+n2;
    return suma;
}
let sum=suma2();
datos.innerHTML+=`<hr><h3>El resultado de la suma2 es : ${sum}</h3> `;

//3.-Funcion que recibe parametros y no regresa valor

function suma3(numero1, numero2)
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    datos.innerHTML+=`<hr><h3>El resultado de la suma3 es : ${suma}</h3> `;
}
suma3(3,4);
//4.-Funcion que recibe parametros y regresa valor 

function suma4(numero1, numero2)
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    return suma; 
}
sum=suma4(4,4);
datos.innerHTML+=`<hr><h3>El resultado de la suma4 es : ${sum}</h3> `;


//Arreglos

let animales=[];
animales[0]="Perro";
aminales[1]="Gato";
animales[2]="Ave";

let animales2=["Tigere", "Leon","Elefante"];
for(let i=0; i<animales.length;i++);
{
    datos.innerHTML+=`<hr><h3>El animal es : ${animales[i]}</h3> `
}

animales2.forEach(element => {
    datos.innerHTML+=`<hr><h3>El animal es : ${element}</h3> `;
});



