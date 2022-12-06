document.getElementById("button").addEventListener("click", quizRun);

let score = "0";

function quizRun() {
  score = 0;
  let ans1 = document.getElementById("org").value;
  let ans2 = document.getElementById("born").value;
  let ans3 = document.getElementById("job").value;
  let ans4 = document.getElementById("jail").value;

  if (ans1 === "top secret") {
    score++;
  }

  if (ans2 === "February 25, 1964") {
    score++;
  }

  if (ans3 === "mechanic") {
    score++;
  }

  if (ans4 === "1998") {
    score++;
  }

  let percent = (100 / 4) * score;

  document.getElementById("output").innerHTML = score;
  document.getElementById("percent").innerHTML = percent;
}
