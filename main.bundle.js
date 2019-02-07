/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	function loadFoods(food_objects) {
	  food_objects.forEach(function (food) {
	    $('.food_table').append('<tr>\n      <td>' + food.name + '</td>\n      <td>' + food.calories + '</td>\n      </tr>');
	  });
	}

	function getRequest(method, id) {
	  fetch("https://shielded-springs-44061.herokuapp.com/api/v1/foods/").then(function (response) {
	    response.json().then(function (food_json) {
	      var food_objects = JSON.parse(food_json);
	      loadFoods(food_objects);
	    });
	  }).catch(function (error) {
	    console.log('One of the ids sent was indvalid');
	  });
	}

	function universalService(id, method, body) {
	  return fetch("https: //shielded-springs-44061.herokuapp.com/api/v1/foods" + id, {
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
	    food: {
	      name: foodName,
	      calories: calories
	    }
	  }).then(function (response) {
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

	$(document).ready(function () {
	  getRequest();
	  // (".add_food").addEventListener("click", function () {
	  //   addFood();
	});
	// event listener for submit button that calls a function!

/***/ })
/******/ ]);