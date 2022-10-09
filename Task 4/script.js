/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

let output = document.getElementById("output")

fetch('cars.json')
    .then(x => x.json())
    .then((data) => {

        for (i=0; i<data.length; i++) {
            createCard(data[i])
        }

        function createCard () {

            let card = document.createElement('div')
            card.className = 'card container'
            card.style = 'width:18rem; margin-top:1rem'
            output.appendChild(card)

            let brand = document.createElement('div')
            brand.className = 'card-header'
            brand.style = 'width:18rem'
            brand.innerText = data[i].brand

            let modelsBox = document.createElement('ul')
            modelsBox.className = 'list-group list-group-flush'
            card.appendChild(brand)
            card.appendChild(modelsBox)

            // console.log(data[0].models)
            
            const models = document.createElement('li')
            models.className = 'list-group-item'
            models.style = 'width:17rem'
            models.innerText = data[i].models
            modelsBox.appendChild(models)
            
        }
    })

   




       
    //     for (i=0; i<data[i].models.length; i++) {

    //         let models = data[i].models // console.log(data[i].models)


    //         // console.log(models)

    //         const categoryItem = document.createElement('li')
    //     categoryItem.className = 'list-group-item'
    //     categoryItem.innerText = models
    //     modelsBox.appendChild(categoryItem)


    //     }
    // }



// <div class="card" style="width: 18rem;">
//   <div class="card-header">
//     Featured
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//   </ul>
// </div>