console.log("connected");

// accessing the button element
const btn = document.getElementsByClassName("btn")[0];

// logic to get the random num btw 1-10
const randNum = parseInt(Math.random() * 10 + 1);
// console.log(randNum);

// accessing the form element
const form = document.getElementsByClassName("border")[0];

// accessing h1 = notice element
const notice = document.getElementById("notice");

//access score class
const score = document.getElementsByClassName("score")[0];

var count = 0;

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const num = document.getElementById("num").value;
  if (randNum > num) {
    notice.innerText = "Try a Bigger Number ⬆️";
    form.style.borderColor = "red";
    count++;
    score.innerText = count;
  } else if (randNum == num) {
    notice.innerText = "Congrats㊗️㊗️";
    form.style.borderColor = "green";
    score.innerText = count;
  } else {
    notice.innerText = "Try a Smaller Number ⬇️";
    form.style.borderColor = "red";
    count++;
    score.innerText = count;
  }

  form.reset();
});
