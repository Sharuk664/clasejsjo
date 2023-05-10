//OR || ; devurlve el valor verdadero
/*
//EJemplo 1:
if (1 || 0) {
    alert("Valor verdadero¡")
} else {
    alert('Valor falso¡')
}
*/

/*
//Ejemplo 2
let hour = 9
if (hour < 10 || hour > 18) {
    alert('La oficina esta cerrada.')
}
*/

/*
//Ejemplo 3
let firsNane = "";
let lastName = "";
let NickName = "SuperCoder";

alert( firsNane || lastName || NickName || "Anonymous")
*/


//AND && : devurlve el valor falso
/*
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
*/

/*
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert("La hora es 12:30");
}
*/


//Ejercicios
/*
//Ejercicio 1 (OR)
alert( alert(1) || 2 || alert(3) ); //no se considera a los alert como datos
*/

/*
//Ejercicio 2 (AND)
alert(alert(1) && alert (2))
*/

/*
//Ejercicio 3 (OR AND OR)
alert( null || 2 && 3 || 4 ); //el or compara el primer valor verdadero, si es null de dara el segundo, y el and compara el ultimo resultado
*/

/*
//Ejercicio 4
let age =prompt("La edad es...")

if (age >= 14 && age <= 90) {
    alert("Esta dentro de la edad permitida")
} else  {
    alert ("Incorrecto, ¡TU EDAD NO ESTA DENTRO DE LO PERPERMITIDO!")
}
*/

/*
//Ejercicio 5
let age =prompt("La edad es...")

if (!(age >= 14)  && !(age <= 90) ) {
    alert ("Esta dentro de la edad permitida")
} else  {
    alert ("Incorrecto, ¡TU EDAD NO ESTA DENTRO DE LO PERPERMITIDO!")
}
*/
