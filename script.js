
var drinkButton = document.getElementById("modal-drink");
var howbtn = document.getElementById("how");
var howText = document.getElementById("how-to-text")
var drinkButton = document.getElementById("modal-drink")

function generateDrink() {
  var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

  fetch(cocktailUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
}

drinkButton.addEventListener("click", generateDrink)


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-drink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function displayCocktail(myModal) {
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php" + myModal,
    type: "GET",
    success: function (result) {
      var modal = $("mod-content");
      modal.html(result);
    }
  })
}
//EX:https://opentdb.com/api.php?amount=50&category=11&type=multiple

//"https://opentdb.com/api.php?amount=" +  + "&category=" +  + "&difficulty=" + + "&type=multiple"



/*
Difficulty: easy, medium, hard

Categories:
General Knowledge - 9
Film - 11
Music - 12
TV - 14
Videogames - 15
Sports - 21

Number of questions: 
Min - 1
max - 50
*/

/*Variables*/
var quizBody = document.getElementById("quiz");
var container = document.getElementById('question-block');
var question = document.getElementById('question-text');
var opt1 = document.getElementById('a');
var opt2 = document.getElementById('b');
var opt3 = document.getElementById('c');
var opt4 = document.getElementById('d');
//var nextButton = document.getElementById('nextButton');

//Start quiz function, need to prvent default
var startQuizButton = document.getElementById("startQuizButton");
var startQuizDiv = document.getElementById("startpage");

/*
Number of questions: 
Min - 1
max - 50
*/

//Quiz variables
var categories = document.getElementById("stacked-categories")
var difficulty = document.getElementById("stacked-difficulty")
var amount = document.getElementById("multi-how-many")
//var numQuest = document.getElementById("field-questions")
console.log(categories.value)
console.log(difficulty.value)

//Function for start quiz and get appropriate menu selections
function startQuiz() {

  if (categories.value === "General Knowledge") {
    categories = "9"

  } else if
    (categories.value === "Film") {
    categories = "11"
  } else if
    (categories.value === "Music") {
    categories = "12"
  } else if
    (categories.value === "TV") {
    categories = "14"
  } else if
    (categories.value === "Videogames") {
    categories = "15"
  } else {
    (categories.value === "Sports")
    categories = "21"
  }
  console.log("https://opentdb.com/api.php?amount=" + amount.value + "&category=" + categories + "&difficulty=" + difficulty.value.toLowerCase() + "&type=multiple")

  //Quiz api fetch 
  fetch("https://opentdb.com/api.php?amount=" + amount.value + "&category=" + categories + "&difficulty=" + difficulty.value.toLowerCase() + "&type=multiple")

    //populate the quiz block with the category and questions 
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        question.textContent = data.results[i].question
        opt1.innerHTML = "A: " + data.results[i].correct_answer;
        opt2.innerHTML = "B: " + data.results[i].incorrect_answers[0];
        opt3.innerHTML = "C: " + data.results[i].incorrect_answers[1];
        opt4.innerHTML = "D: " + data.results[i].incorrect_answers[2];
      };

    })
  startQuizDiv.style.display = "none";
  quizBody.style.display = "block";
}

//START QUIZ
startQuizButton.addEventListener("click", function (event) {
  event.preventDefault()
  startQuiz()
});


var drinkButton = document.getElementById("modal-drink")


function generateDrink() {
  var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

  fetch(cocktailUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
}

howbtn.addEventListener("click", showGuide)
drinkButton.addEventListener("click", generateDrink)


function showGuide() {
  if (howText.classList.contains("hide")) {
    howText.classList.remove("hide");
  } else {
    howText.classList.add("hide")
  }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-drink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function displayCocktail(myModal) {
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php" + myModal,
    type: "GET",
    success: function (result) {
      var modal = $("mod-content");
      modal.html(result);
    }
  })

  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php" + myModal,
    type: "GET",
    success: function (result) {
      var modal = $("mod-content");
      modal.html(result);
    }
  })
}
