/* 4. EMPLEADOS-B
|* En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al
|* personal administrativo. La empresa necesita determinar cuánto es el total de sueldo (por
|* empleado y por la empresa) que deberá pagar en la próxima nómina.
|* Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
|* el siguiente formato de salida, informando que Juan (obrero) actualmente gana $100, Ana
|* (obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos
|* (administrativo) gana $150:
|* Juan tendrá un sueldo de $120
|* Ana tendrá un sueldo de $144
|* Lin tendrá un sueldo de $220
|* Mary tendrá un sueldo de $60
|* Carlos tendrá un sueldo de $165
|* El total de sueldo que debe pagar la empresa es de $709 
*/
import Cl_personal from "./Cl_personal.js";
import Cl_empresa from "./Cl_empresa.js";

let per1 = new Cl_personal("Juan", "Obrero", 100);
let per2 = new Cl_personal("Ana", "Obrero", 120);
let per3 = new Cl_personal("Lin", "Administrativo", 200);
let per4 = new Cl_personal("Mary", "Obrero", 50);
let per5 = new Cl_personal("Carlos", "Administrativo", 150);
let empresa = new Cl_empresa();

empresa.procesarPersonal(per1);
empresa.procesarPersonal(per2);
empresa.procesarPersonal(per3);
empresa.procesarPersonal(per4);
empresa.procesarPersonal(per5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>${per1.nombre} tendrá un sueldo de $${per1.calcSuelF()}
<br>${per2.nombre} tendrá un sueldo de $${per2.calcSuelF()}
<br>${per3.nombre} tendrá un sueldo de $${per3.calcSuelF()}
<br>${per4.nombre} tendrá un sueldo de $${per4.calcSuelF()}
<br>${per5.nombre} tendrá un sueldo de $${per5.calcSuelF()}
<br>
<br>El total de sueldo que debe pagar la empresa es de $${empresa.devolverSuelPagar()}
`;