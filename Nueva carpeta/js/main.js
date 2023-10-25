//alert()

const MIN_POWER= 10;
const MAX_POWER= 30;


let vidaLux= 550;
let vidaRyze= 550;

let round = 0

function calcularGolpe(){
    return Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);
}

function ambosSiguenVivos(){
    return (vidaLux>0) && (vidaRyze>0)
}

while(ambosSiguenVivos()){
//round = round + 1;
round +=1;
//round++;

console.log("----------Round: "+ round + "---------------------")


//let ondadeluzLux=Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);
//let golpedechoqueRyze=Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);
let ondadeluzLux= calcularGolpe();
let golpedechoqueRyze= calcularGolpe();

//let ondadeluzLux= 20;
//let golpedechoqueRyze= 20;

console.log("Lux tira sus hechizos " + ondadeluzLux);
console.log("Ryze tira sus hechizos" + golpedechoqueRyze);

if(ondadeluzLux === golpedechoqueRyze){
    console.log("..DRAW..");
}else if( golpedechoqueRyze > ondadeluzLux) {
    //vidaRyze = vidaRyze - ondadeluzLux;
    vidaRyze =- ondadeluzLux;
}else {
    //vidaLux = vidaLux - golpedechoqueRyze;
    vidaLux =- golpedechoqueRyze;
}

console.log ("La vida de Lux es " + vidaLux);
console.log ("La vida de Ryze es " + vidaRyze);

}


console.log ("---------WINNER---------");

if(vidaLux>0){
    console.log("THE WINNER IS LUX");
    document.write("<img src='img/LUX.jpeg' />")
}else{
    console.log ("THE WINNER IS RYZE")
    document.write("<img src='img/RYZE.jpeg' />")
}

//console.log (parseInt (Math.random)()*30 )
//console.log((Math.random()*30).toFixed(0))
//console.log(Math.round(Math.random()*30))
//console.log(Math.round(1.9))
//console.log(Math.floor(1.999))
//console.log(Math.ceil(1.0001))