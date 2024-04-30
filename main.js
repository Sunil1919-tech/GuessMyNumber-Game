console.log("connected");

// accessing the button element
const btn = document.getElementsByClassName("btn")[0];

// logic to get the random num btw 1-10
const randNum = parseInt(Math.random() * 10 + 1) ;

// accessing the form element 
const form = document.getElementsByClassName('border')[0]

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const num = document.getElementById("num").value;
  if (randNum > num) {
    console.log("Try a Bigger Number ⬆️");
  } else if (randNum == num) {
    console.log("Congrats ㊗️");
  } else {
    console.log("Try a Smaller Number ⬇️");
  }

  form.reset();
});



let myArray = ["1", "2", "3", "4"]
let firstNum = parseInt(myArray[0]);
let secondNum = parseInt(myArray[3]);
console.log(firstNum + secondNum);