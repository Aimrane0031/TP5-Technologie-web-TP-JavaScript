let nb = Math.floor(Math.random()*10)+1
let rep
let c = 0

while(rep != nb){

rep = prompt("choisir nombre entre 1 et 10")
rep = Number(rep)

c++

if(rep < nb){
alert("plus grand")
}

else if(rep > nb){
alert("plus petit")
}
else{
alert("bravo")
}

}

alert("vous avez trouver apres" + c + "fois")
