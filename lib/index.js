function loadFoods(food_objects) {
  food_objects.forEach((food) => {
    $('.food_table').append(`<tr>
      <td>${food.name}</td>
      <td>${food.calories}</td>
      </tr>`)
  })
}

function serviceRequest() {
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

function addFood() {
  var name = $('input[name="foodName"]').val();
  var calories = $('input[name="calories"]').val();
  // do the post
}


$(document).ready( function() {
  serviceRequest();

  // event listener for submit button that calls a function!
  
})
