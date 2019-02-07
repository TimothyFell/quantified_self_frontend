class Food {
  constructor() {
    this.all_foods = `https://shielded-springs-44061.herokuapp.com/api/v1/foods`
  }

  serviceRequest() {
    fetch(this.all_foods)
      .then(response => response.json())
      .then(foods => this.foods = JSON.parse(foods))
      .catch(error => console.log("shits fucked", error))
  }

  setElements() {
    this.currentTemperature = document.querySelector(".temperature")
    this.currentSummary = document.querySelector(".summary")
    this.high = document.querySelector(".high")
    this.low = document.querySelector(".low")
    this.city = document.querySelector(".city")
    this.state = document.querySelector(".state")
    this.country = document.querySelector(".country")
    this.time = document.querySelector(".time")
    this.date = document.querySelector(".temperature")
  }

  loadFoods() {
    this.serviceRequest();
    let table = document.querySelector(".food_table");
    let food_array = this.foods

    console.log(food_array)
    // food_array.forEach(food => {
    //   let new_tr = document.createElement('tr')
    //   let new_td = document.createElement('td')
    //   new_tr.appendChild(new_td)
    //   table.appendChild(new_tr)

    // }) 
  }
 
}

const food = new Food
