function loadFoods(food_objects) {
  food_objects.forEach((food) => {
    $('.food_table').append(`<tr>
      <td>${food.name}</td>
      <td>${food.calories}</td>
      </tr>`)
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
    return handleResponse(response);
  }).catch(function (error) {
    return console.error({
      error: error
    });
  });
};


var handleResponse = function handleResponse(response) {
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
  document.querySelector(".add_food").addEventListener('click', addFood);
});
  
