let name = prompt("Digite seu Nome")
let firstNote = prompt("Digite a nota que você tirou no primeiro Bimestre")
let secondNote = prompt("Digite a nota que você tirou no segundo Bimestre")
let thirdNote = prompt("Digite a nota que você tirou no terceiro Bimestre")

const calcNotes = (Number(firstNote) + Number(secondNote) + Number(thirdNote)) / 3

results = calcNotes.toFixed(2)

if (results >= 6) {
 alert("Parabéns " + name + "!!! Você tirou " + results + " e por isso passou de ano e merece descansar, porquê o pai não é de ferro não é mesmo? Te espero ano que vem no seu próximo ano" )
}
else {
 alert("Não foi dessa vez " + name + " você tirou " + results + "que é abaixo da média, mas você tem chance ainda de passar fazendo a prova de recuperação, acredite em você" )
}