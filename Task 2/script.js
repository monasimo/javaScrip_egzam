/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let button = document.getElementById('btn_element')
// button.addEventListener('click', buttonClick)
console.log('bababa')
function buttonClick(event) {

    console.log(this)
    console.log(event)
    console.log(event.target)
    this.innerText++
}