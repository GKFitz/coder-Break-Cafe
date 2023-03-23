
// API Random CAT and DOG Pictures

//CATS
// let storeCatPics = [];

function fetchCatImage(){
    
    let animalImage = document.getElementById("animalPic")
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(resp => resp.json())
    .then(json => animalImage.src = json[0].url)
}
    


function btnClickCat(){
    let button = document.getElementById("getCatBtn");
    button.addEventListener("click", fetchCatImage)
}

document.addEventListener("DOMContentLoaded", () => {
    fetchCatImage()
    btnClickCat()
})


//DOGS

// let storeDogPics = [];

function fetchDogImage(){
    let animalImage = document.getElementById("animalPic")
    fetch("https://api.thedogapi.com/v1/images/search?limit=10")
    .then(resp => resp.json())
    // replace the image with the setImg function
    .then(json => animalImage.src = json[0].url)
}
    


function btnClickDog(){
    let button = document.getElementById("getDogBtn")
    button.addEventListener("click", fetchDogImage)
}

document.addEventListener("DOMContentLoaded", () => {
    fetchDogImage()
    btnClickDog()
})



//RapidAPI Tasty API Coffee/Cocktails;

const $input = $('input[type="text"]')
let drinkData= [];



$('form').on('submit', handleGetData);
function handleGetData(event) {
    event.preventDefault();
    let userInput= $input.val();
    console.log("I've been hit!")

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tasty.p.rapidapi.com/recipes/list?tags=drinks&from=0&size=4&q=" + userInput ,
        
        // "url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=" + userInput,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "9fa51d6725msha4068349b62f730p12c6d2jsnbe63b8ef2e2d",
            "X-RapidAPI-Host": "tasty.p.rapidapi.com"
        
        }
    };

    $.ajax(settings)
    
    // then((data) => console.log(data))
    .done(function (response) {
        console.log(response)
        drinkData = response.results;

        render()
        console.log(drinkData);
    });
}



let $ul = document.querySelector('#list');

function render() {
    document.querySelector('#list').innerHTML = "";
    //for of loop that goes through drink data, make the li, append to the array.
    for (let drinkList of drinkData){
        console.log(drinkList)
        let instructString = ''
        
        for(let instruction of drinkList.instructions) {
        instructString += instruction.display_text + '\n'
       
        }
        console.log(instructString)
        let drinksLi = document.createElement("li");
        drinksLi.innerHTML = `<strong>${drinkList.name}</strong><br> ${instructString}`      
        $ul.append(drinksLi);
    }
}

//Inspirational Quote API
// var category;

// $('#form').on('click', handleGetDataQ);

// function handleGetDataQ() {
//     category = 'inspirational';
//     $.ajax({
//         method: 'GET',
//         url: 'https://api.api-ninjas.com/v1/quotes?category=' + inspirational,
//         headers: { 'X-Api-Key': 'VHIc78F/pShldQyn3Mm5dA==i48IHKcIYXyNCyAT'},
//         contentType: 'application/json',
//     }).then(
//         (data) => {
//         qOTD = data;
//         render();
//         },
//         (error) => {
//         console.log('bad request', error);
//         }
//     );   
        
// }  

// var category= "inspirational"
// $.ajax({

//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'VHIc78F/pShldQyn3Mm5dA==i48IHKcIYXyNCyAT'},
//     contentType: 'application/json',
//     success: function(result) {
//     console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// let qOTD;
// // const $showData = $('#show-data');
// // const $raw = $('pre');
  
// $('#getQuote').on('click', (e) => {
//     e.preventDefault();
  
//     $showData.text('Loading the JSON file.');
  
//     $.getJSON('example.json', (data) => {
//         const markup = data.items
//         .map(item => `<li>${item.key}: ${item.value}</li>`)
//         .join('');
  
//         const list = $('<ul />').html(markup);
  
//         $showData.html(list);
  
//         $raw.text(JSON.stringify(data, undefined, 2));
//     });
// });
     
        
//         // success: function(result) {
//         //     console.log(result);
//         // },
//         // error: function ajaxError(jqXHR) {
//         //     console.error('Error: ', jqXHR.responseText}

// function render() {
//     qOTD.quote
//     qOTD.author
//     qOTD.category
    
// }


   










// document.querySelector("#list").addEventListener('click', function () {
//     document.querySelector(drinksLi).innerHTML = '';
// })
















































// NOt Rapid CATS API
// const promise = $.ajax(
//     'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_dyq3XlD3i6ROIfc1C5svJpaWpdLzo5dQyso9rpuUoThjnPfIPgmN5uvA1ylbQ59y'
	
// );

// promise.then(
//   (data) => {
//    console.log(data);
//   },
//   (error) => {
//    console.log('bad request: ', error);
//   }
// );

// const url = "https://api.thecatapi.com/v1/images/search?limit=10";

// const api_key = "live_dyq3XlD3i6ROIfc1C5svJpaWpdLzo5dQyso9rpuUoThjnPfIPgmN5uvA1ylbQ59y";