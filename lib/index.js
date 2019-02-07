function loadFoods(food_objects) {
  food_objects.forEach((food) => {
    $('.food_table').append(`<div>
      <p>${food.name}</p>
      <p>${food.calories}</p>
      </div>`)
  })
}


function loadMeals(meal_objects) {
  meal_objects.forEach((meal) => {
  console.log(meal)
    $('.meal_table').append(`<div>
      <p>${meal.name}</p>
      <p> ${meal.foods.forEach((food) => {$('.meal_table').append(`<p>${food.name}</p> <p>${food.calories}</p>`)})} </p>
      </div>`)
  })
}



function mealsRequest(method, id) {
  fetch("https://shielded-springs-44061.herokuapp.com/api/v1/meals")
    .then(response => {
      response.json()
        .then(meals_json => {
          var meal_objects = meals_json
          loadMeals(meal_objects);
        })
    })
    .catch((error) => {
      console.log('One of the ids sent was indvalid')
    })
}

function getRequest(method, id ) {
  fetch("https://shielded-springs-44061.herokuapp.com/api/v1/foods")
  .then(response => {
    response.json()
    .then(food_json => {
      var food_objects = JSON.parse(food_json);
      loadFoods(food_objects);
     })
   })
   .catch((error) => {
     console.log('One of the ids sent was indvalid')
   })
}

function universalService(id, method, body) {
  return fetch("https://shielded-springs-44061.herokuapp.com/api/v1/foods/" + id, {
    method: '' + method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
};


function addFood() {
  var foodName = $('input[name="foodName"]').val();
  var calories = $('input[name="calories"]').val();
  // do the post

  universalService('', 'POST', {
      name: foodName,
      calories: calories
  }).then(function (response) {
    console.log(response)
    window.location.href = window.location.href;
    return handleResponse(response);
  }).catch(function (error) {
    return console.error({
      error: error
    });
  });
};

function addToMeal () {
  var mealType = $('input[name="mealType"]').val();
  var foodName = $('input[name="foodName"]').val();
  // do the post

  mealService('', 'POST', {
    food_name: foodName,
    meal_type: mealType
  }).then(function (response) {
    console.log(response)
    window.location.href = window.location.href;
    return handleResponse(response);
  }).catch(function (error) {
    return console.error({
      error: error
    });
  });

  };




function handleResponse(response) {
  return response.json().then(function (json) {
    if (!response.ok) {
      var error = {
        status: response.status,
        statusTest: response.statusText,
        json: json
      };
      return Promise.reject(error);
    }
    return json;
  });
};


$(document).ready(function() {
  getRequest();
  mealsRequest();
  document.querySelector(".add_food").addEventListener('click', addFood);
  // document.querySelector(".add_meal").addEventListener('click', addFood);
});
