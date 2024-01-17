/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients =
[ {
    name: "Luiz",
    age: 21,
    weight: 72,
    height: 180
},
{
    name: "Samanta",
    age: 20,
    weight: 45,
    height: 165
},
{
    name: "Luiza",
    age: 12,
    weight: 60,
    height: 160
}
]

let patientsNames = []
let patientsAges = []
let patientsWeights = []
let patientsHeights = []

for(let patient of patients) {
    patientsNames.push(patient.name)
    patientsAges.push(patient.age)
    patientsWeights.push(patient.weight)
    patientsHeights.push(patient.height)
}

alert(`patientsNames`)