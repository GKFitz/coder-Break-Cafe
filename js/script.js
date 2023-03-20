
//Cats API
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



// CATS


let storeCatPics = [];

function fetchCatImage(){
    let image = document.getElementById("catPic")
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
}
    


function btnClickCat(){

    let button = document.getElementById("getCatBtn")
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
    let image = document.getElementById("dogPic")
    fetch("https://api.thedogapi.com/v1/images/search?limit=10")
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
}
    


function btnClickDog(){

    let button = document.getElementById("getDogBtn")
    button.addEventListener("click", fetchDogImage)
}

document.addEventListener("DOMContentLoaded", () => {
    fetchDogImage()
    btnClickDog()
})




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























//Coffee/Cocktails; RapidAPI Tasty API
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "9fa51d6725msha4068349b62f730p12c6d2jsnbe63b8ef2e2d",
// 		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });