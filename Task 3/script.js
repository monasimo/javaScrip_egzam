/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */


// ********************** UZDUOTYJE PARASYTA IKELTI REIKSMES KORTELEJE, NEZINOJAU AR avatar_url REIKSME TUREJOTE OMENYJE TIESIOG TEKSTA AR NUOTRAUKA TAI IDEJAU IR TEKSTA IR NUOTRAUKA :)

const ENDPOINT = 'https://api.github.com/users';

console.log('start')

document.getElementById('btn').addEventListener('click', showData)

let output = document.getElementById('output')

function showData () {

    fetch(ENDPOINT)
    .then(x => x.json())
    .then(data =>{
        document.getElementById('message').innerText = ''

        for (let i=0; i<data.length; i++) {

            let card = document.createElement('div')
            card.className = 'card'
            output.appendChild(card)
            card.style = 'margin:1%'

            let avatar = document.createElement('img')
            avatar.className ='card-img-top'
            avatar.src = data[i].avatar_url

            let avatar_url = document.createElement('div')
            avatar_url.className = 'card-header'
            avatar_url.innerText = data[i].avatar_url

            let loginBox = document.createElement('div')
            loginBox.className = 'card-body'

            let login = document.createElement('h5')
            login.className = 'card-title'
            login.innerText = data[i].login

            card.appendChild(avatar)
            card.appendChild(avatar_url)
            card.appendChild(loginBox)
            loginBox.appendChild(login)
        }
    })   
}
    