const nomeHeroi = prompt("Digite o nome do herói");
const xpHeroi =  parseInt(prompt("Digite  a quantidade de experiência de XP do herói: "));

let nivel; 

if (xpHeroi < 1000){
    nivel = "Ferro";
} else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivel = "Ouro";
} else if  (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivel = "Ascendente";
}else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log ("O Héroi de nome "+ nomeHeroi + " está no nivel de " + nivel)