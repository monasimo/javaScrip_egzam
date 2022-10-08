/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let input = document.getElementById('search')

let output = document.getElementById('output')

document.body.querySelector('form').addEventListener('submit', calculate)

function calculate () {

    let lb = input.value * 2.2046 + ' ' + 'lb'
    let g = input.value / 0.0010000 + ' ' + 'g'
    let oz = input.value * 35.274 + ' ' + 'oz'
    let statement = document.createElement('div')
    statement.innerText = input.value + 'kg is:'
    statement.style = 'font-weight:bold; margin-top: 2%'
    output.appendChild(statement)
    output.style = 'text-align:center; font-size:2rem; background-color:white; width:80%; padding:1%; margin-left:10%; margin-bottom:1%'
    let weight = [lb, g, oz]

    for (let i=0; i<weight.length; i++) {
        let weightDiv = document.createElement('div')
        weightDiv.innerText += weight[i]
        weightDiv.style = 'font-size:1.5rem'
        output.appendChild(weightDiv)
    }
   
}

