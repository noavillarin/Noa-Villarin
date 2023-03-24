//MAGIC 8 BALL RESPONSE SCRIPT

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
var goodresponses = [
    'ya for sure.',
    'thats sick you definitely should',
    '100%',
    'duh!',
    'ooooo please yes',
    'yes yes YES',
    'ok ya maybe so.',
    'definitely',
    'lol ya.',
]
var mediumresponses = [
    'oop try again.',
    'hmm Im not sure.',
    'hehehe im not going to tell you.',
    'are you sure you want to ask that?',
]
var badresponses = [
    'to be honest.. I wouldnt',
    'yikes, maybe no?',
    'eek.... no.',
    'um hate to break it to you but no.',
]
// positive, medium and neg arrays. 
// math random for 1,2 and if one than look at neg, 2 pos. 
// then once it knows which variable and then run the math.random origanal. (if then)
// use concol log as friend.

const tryAgain = document.querySelector("#final");
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 3)
  console.log(rndInt)

  var randomGoodResponse = goodresponses[Math.floor(Math.random() * goodresponses.length)];
  var randomBadResponse = badresponses[Math.floor(Math.random() * badresponses.length)];
  var randomMediumResponse = mediumresponses[Math.floor(Math.random() * mediumresponses.length)];
  var button = document.querySelector("#button");
 
  button.addEventListener('click', function () {
    console.log("click");
if (rndInt == 1){
    document.querySelector('#display').style.display = "block";
   document.querySelector('#display').innerHTML = randomGoodResponse;
//   document.body.style.backgroundImage = "url(img/8ball.jpg)";
} else if (rndInt == 2) {
    document.querySelector('#display').style.display = "block";
    document.querySelector('#display').innerHTML = randomBadResponse;
 //   document.body.style.backgroundImage = "url(img/8ball.jpg)";

} else {
    document.querySelector('#display').style.display = "block";
    document.querySelector('#display').innerHTML = randomMediumResponse;
 //   document.body.style.backgroundImage = "url(img/8ball.jpg)";
 
}
});

var gooGoo = document.querySelector("#display");

function reSet() {
    console.log('chichi');
   tryAgain.style.display = "block";
};

button.addEventListener('click', reSet);



// var first_click = true;
//   button.onclick = function() {
//       if (first_click) {
//         if (rndInt == 1){
//             document.querySelector('#display').innerHTML = randomGoodResponse;
//             document.body.style.backgroundImage = "url(img/happy.jpg)";
//          } else if (rndInt == 2) {
//              document.querySelector('#display').innerHTML = randomBadResponse;
//              document.body.style.backgroundImage = "url(img/sad.jpg)";
//          } else {
//              document.querySelector('#display').innerHTML = randomMediumResponse;
//              document.body.style.backgroundImage = "url(img/opening.jpg)";
//          }
//           first_click = false;
//       } else {
//         if (rndInt == 1){
//             document.querySelector('#display').innerHTML = randomGoodResponse;
//             document.body.style.backgroundImage = "url(img/happy.jpg)";
//          } else if (rndInt == 2) {
//              document.querySelector('#display').innerHTML = randomBadResponse;
//              document.body.style.backgroundImage = "url(img/sad.jpg)";
//          } else {
//              document.querySelector('#display').innerHTML = randomMediumResponse;
//              document.body.style.backgroundImage = "url(img/opening.jpg)";
//          }
//       }
//   }

//Create a variable that randomly selects a positive whole between 0 and the number of total responses.
// var randomGoodResponse = goodresponses[Math.floor(Math.random() * goodresponses.length)];
// var randomBadResponse = badresponses[Math.floor(Math.random() * badresponses.length)];
//Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
// document.querySelector('#display').innerHTML = randomResponse;



// button.addEventListener('click', function () {
//     // console.log("click");
//     // document.querySelector('#display').innerHTML = randomResponse;
// });

// button.addEventListener('click', function () {
//     document.body.style.backgroundImage = "url(img/happy.jpg)";
// });
// function refreshPage() {
//     location.reload();
// }
// var 
// document.addEventListener("onClick",function(refreshPage){
//     console.log("refresh page");
//     console.log(refreshPage);
// }
// )

// function refreshPage(){
//     onClick="refreshPage()"
//     window.location.reload();
 