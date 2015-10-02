

// Create wrapped function

(function () {

// **********************************
// ********* Question #1 ************ 

// Create an array of just the prices

var prices = items.map( function (item) {
  return item.price;
  
});

 console.log(prices);


// Add all prices together

var sum = prices.reduce( function (prev, next) {
  return prev + next;

});

console.log(sum);


// Divide sum by total number of items

var avg = sum / prices.length;
console.log(avg);


//Convert it to 2 decimal places

var converted = avg.toFixed(2);
console.log(converted);

// Make it a string

var str = 'The average price is $' + converted;
console.log(str);

// Make it show up on the page

var answer1 = document.querySelector('#answer1');
var textNode = document.createTextNode(str);

answer1.appendChild(textNode);


// *********************************
// ********* Question #2 ************

// Create an array of the prices

var prices = items.map( function (item) {
  return item.price;
  
});

 console.log(prices);


//Filter prices between 14 and 18

var itemscost = items.filter (function (item) {
  return (item.price > 14) && (item.price < 18);

});

 console.log(itemscost);


 // For each item make a string
 var answer2 = document.querySelector('#answer2');

itemscost.forEach (function (item) {

  console.log(item.title);
  var textNode = document.createTextNode(item.title);

answer2.appendChild(textNode);

});


// **********************************
// ************ Question 3 **********


 //Find GBP in array

 var britishitems = items.filter (function (item) {
  return item.currency_code === "GBP";

});

 console.log(britishitems);

 // var str = britishitems + ' costs £18';
 //  console.log(str);


// Make it show up on the page

var answer3 = document.querySelector('#answer3');


britishitems.forEach (function (item) {
  console.log(item.title);
  
var textNode = document.createTextNode(item.title);

answer3.appendChild(textNode);

});


// *****************************
// ******* Question 4 **********


 //Find array items made of wood

 var woodItems = items.filter (function(item) {
    return item.materials.indexOf('wood' || 'wooden') !== -1;

});

 console.log(woodItems);


// Make it show up on the page

var answer4= document.querySelector('#answer4');


woodItems.forEach (function (item) {
  console.log(item.title);
  
var textNode = document.createTextNode(item.title);

answer4.appendChild(textNode);

});

// *********************************
// ********** Question 5 ***********

// Array of items made of 8 or more materials

var  materialItems = items.filter (function(item) {
    return item.materials.length >=8;
});

console.log(materialItems);


// Show item.name, # of item.materials length and item.materials

var answer5 = document.querySelector('#answer5');


materialItems.forEach (function (item) {

  console.log(item.title + item.materials.indexOf('Array') + item.materials);


var textNode = document.createTextNode(item.title);

answer5.appendChild(textNode);

});

// *************************************
// ************** Question 6 ***********

//
// Find  seller made in array

var sellerMade = items.filter (function (item) {
  return item.who_made === "i_did";

});

  console.log(sellerMade.length);


// Convert array to string

var str = sellerMade.length + ' were made by their sellers';


// Make it show up on the page

var answer6 = document.querySelector('#answer6');
var textNode = document.createTextNode(str);

answer6.appendChild(textNode);

}());


