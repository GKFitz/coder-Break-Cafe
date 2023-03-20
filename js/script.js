
//Cats API
const promise = $.ajax(
    'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_dyq3XlD3i6ROIfc1C5svJpaWpdLzo5dQyso9rpuUoThjnPfIPgmN5uvA1ylbQ59y'
	
);

promise.then(
  (data) => {
   console.log(data);
  },
  (error) => {
   console.log('bad request: ', error);
  }
);


//Coffee/Cocktails; RapidAPI Tasty API
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "9fa51d6725msha4068349b62f730p12c6d2jsnbe63b8ef2e2d",
		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});