let qst = [
["capital france ?","Paris"],
["2+2 ?","4"],
["color ciel ?","bleu"]
]

function lancerQuiz(){
let point = 0

for(let i=0;i<qst.length;i++){

let q = qst[i][0]
let r = qst[i][1]
let user = prompt(q)

if(user == r){
alert("juste")
point++
}
else{
alert("faux")
}
}

alert("resultat "+ point + "/" + qst.length)

}
