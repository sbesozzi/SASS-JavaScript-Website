// ********* Question #1 ************

// Create wrapped function

(function () {

  // console.log(items.length);

    // items.forEach( function (item) {
    //   console.log (item.price);
    // });


// Create an array of just the prices

var prices = items.map( function (item){
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


}());





// ********* Question #2 ************

(function () {

  

// Create an array of the prices

var prices = items.map( function (item) {
  return item.price;
  
});

 console.log(prices);


//Filter prices between 14 and 18

 

var prices = items.filter (function (item) {
  return (item.price > 14) && (item.price < 18);

});

 console.log(prices);


 // For each item show on page answer 2

// items.forEach (function (item) {
//   return 
//   )
// }



// Make it a string

// var str = 'The average price is $' + converted;
// console.log(str);

// Make it show up on the page

// var answer2 = document.querySelector('#answer2');
// var textNode = document.createTextNode(str);

// answer2.appendChild(textNode);


}());