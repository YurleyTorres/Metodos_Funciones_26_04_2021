let lista = [];

function Saludar(p1,p2,p3){
    return `Hola ${p1} ${p2} como estas tu edad es: ${p3}`;
}

console.log(Saludar.call(null, "Marly","Torres",33));
console.log(Saludar.call(null, "Jeronimo","Hernandez",6));
console.log(Saludar.apply(null, ["Marly","Torres",33]));
let ejecutar = Saludar.bind(null,"Marly","Torres",33);
lista.push("datos");
console.log(ejecutar());