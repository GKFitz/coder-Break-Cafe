
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