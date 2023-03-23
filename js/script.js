
// API CATS and Dogs


let storeCatPics = [];

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

let storeDogPics = [];

// a function to select a random breed

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



// const $name = $('#name')
// const $thumbNail = $('#thumbNail')
// const $instructions = $('#instructions')
const $input = $('input[type="text"]')

//RapidAPI Tasty API Coffee/Cocktails;
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
        // for(let i= 0; i< drinkList.instructions.length; i++){
        //     console.log(drinkList.instructions[i].display_text)
        // }
        for(let instruction of drinkList.instructions) {
        instructString += instruction.display_text + '\n'
        //    console.log(instruction.display_text)
        }
        console.log(instructString)
        let drinksLi = document.createElement("li");
        drinksLi.innerHTML = `<strong>${drinkList.name}</strong><br> ${instructString}`      
        // drinksLi.setAttribute("href", drinkList.href);
        // drinksLi.textContent = drinkList.text; 
        // drinksLi.textContent = drinkList.name;
        // drinksLi.textContent = drinkList.instructions[];
        // drinksLi.src = drinkList.renditions[0].poster_url;
        // if(drinksLi) 
        //     $ul.append(drinksLi);
        //     console.log(drinksLi)
        
        
        $ul.append(drinksLi);
    }
   
    
    // $instruction.text(drinkData.instructions[]);
    // $thumbNail.img(drinkData.thumbnail_url)

    

}

// document.querySelector('#list').innerHTML = "";
//reset button for the coffee search: make it Local storage friendly


//narrow the search to just coffee and make the assortment random


















// document.querySelector("#list").addEventListener('click', function () {
//     document.querySelector(drinksLi).innerHTML = '';
// })





//Second coffee and cocktail option

// // const $name = $('#name')
// // const $thumbNail = $('#thumbNail')
// const $instructions = $('#instructions')
// // const $weather = $('#weather')
// const $input = $('input[type="text"]')

// //RapidAPI Tasty API Coffee/Cocktails;
// let drinkData= [];



// $('form').on('submit', handleGetData);
// function handleGetData(event) {
//     event.preventDefault();
//     let userInput= $input.val();
//     console.log("I've been hit!")
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": 'https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=3&maxTotalTimeInSeconds=7200&q=' + userInput + '&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&FAT_KCALMax=5000',
//         "method": "GET",
//         "headers": {
//             "X-RapidAPI-Key": "9fa51d6725msha4068349b62f730p12c6d2jsnbe63b8ef2e2d",
//             "X-RapidAPI-Host": "yummly2.p.rapidapi.com"
//         }
//     };

//     $.ajax(settings).done(function (response) {
//         console.log(response)
//             drinkData = response.ingredients;

//             render()
//             // console.log(drinkData);
//         console.log(response);
//     });
// }























// a function to retrieve data from the API
// fetch(url, {
//   headers: {
//     "x-api-key": api_key,
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // Storing the retrieved data from the API in our variable
//     storedBreeds = data;
// });


// Using the random function to select a specific breed. Then extracting information from that breed
//     showCatImageAndInformation(getRandomInt(0, storedBreeds.length - 1));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



























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