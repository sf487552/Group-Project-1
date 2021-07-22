var howbtn = document.getElementById("how");
var howText = document.getElementById("how-to-text");
var amount = document.getElementById("multi-how-many");
var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
var drinkButton = document.getElementById("modal-drink");

var toggle = false
//Determine if quiz open or close

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-drink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function byID(id) {
  return document.getElementById(id);
}

byID("toggle").onclick = function() {
  if (byID("container").classList.contains("closed")) {
    byID("container").classList.remove("closed");
  } else {
    byID("container").classList.add("closed");
  }
}

drinkButton.addEventListener("click",function(e){
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE NOT OK");
    }
  })
  .then(function (data) {   
    console.log(data); 
    displayCocktail(data);
  })
  .catch((error) => {
    console.error("FETCH ERROR:", error);
  });
  
})

  function displayCocktail(data) {
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail");
    cocktailDiv.innerHTML="";
    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1");
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading);
  
    const cocktailImg = document.createElement("img");
    cocktailImg.src = cocktail.strDrinkThumb;
    cocktailDiv.appendChild(cocktailImg);
    modal.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
    const cocktailIngredients = document.createElement("ul");
    cocktailDiv.appendChild(cocktailIngredients);
    const getIngredients = Object.keys(cocktail)
      .filter(function (ingredient) {
        return ingredient.indexOf("strIngredient") == 0;
      })
      .reduce(function (ingredients, ingredient) {
        if (cocktail[ingredient] != null) {
          ingredients[ingredient] = cocktail[ingredient];
        }
        return ingredients;
      }, {});
  
    for (let key in getIngredients) {
      let value = getIngredients[key];
      listItem = document.createElement("li");
      listItem.innerHTML = value;
      cocktailIngredients.appendChild(listItem);
  }

}

/*Variables*/
var quizBody = document.getElementById("quiz");
var container = document.getElementById('question-block');
var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName('choice-text'));
var progressText = document.getElementById('progressText');
var game = document.getElementById('game');
var currentQuestion = {};
var acceptingAnswers = false;
var questionCounter = 0;
var availableQuestions = [];
//Start quiz buttons.
var startQuizButton = document.getElementById("startQuizButton");
var startQuizDiv = document.getElementById("startpage");
//Category and Difficulty dropdowns
var categories = document.getElementById("stacked-categories")
var difficulty = document.getElementById("stacked-difficulty")
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

  
  //Quiz api fetch
  fetch("https://opentdb.com/api.php?amount=" + amount.value + "&category=" + categories + "&difficulty=" + difficulty.value.toLowerCase() + "&type=multiple")

    //populate the quiz block with the category and questions 
    .then(res => {
      return res.json();
    })

    .then((loadedQuestions) => {
      console.log(loadedQuestions)
      questions = loadedQuestions.results.map((loadedQuestion) => {
        const formattedQuestion = {
          question: loadedQuestion.question
        };
        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
        answerChoices.splice(
          formattedQuestion.answer - 1,
          0,
          loadedQuestion.correct_answer
        );
        answerChoices.forEach((choice, index) => {
          formattedQuestion['choice' + (index + 1)] = choice;
        });
        return formattedQuestion;
      });
      availableQuestions = questions
      getNewQuestion()
    })
}

//Quiz Button and Block display
startQuizButton.addEventListener("click", function (event) {
  event.preventDefault()
  if (! toggle) { 
    toggle = !toggle
    quizBody.style.display = "block";
  startQuiz() } else {
    toggle = !toggle
    quizBody.style.display = "none"
  }
});

/*Max questions in array to loop */
var MAX_QUESTIONS = [50];

//Cycle through questions array
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) { quizBody.style.display = "none" }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;
  choices.forEach((choice) => {
    const number = choice.dataset['number'];
    choice.innerHTML = currentQuestion['choice' + number];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    const classToApply =
      selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    if (classToApply === 'correct') {
      // getNewQuestion();
    }
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      
    selectedChoice.parentElement.classList.remove(classToApply);
    getNewQuestion();
    }, 1000);
  });
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

var ruleInput = document.querySelector("#rule-text");
var ruleForm = document.querySelector("#rule-form");
var ruleList = document.querySelector("#rule-list");
var ruleCountSpan = document.querySelector("#rule-count");
var rules = [];
// The following function renders items in a todo list as <li> elements
function renderRules() {
  // Clear todoList element and update todoCountSpan
  ruleList.innerHTML = "";
  ruleCountSpan.textContent = rules.length;

  // Render a new li for each todo
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];

    var li = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = rule;
    li.appendChild(span);
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "REMOVE";

    li.appendChild(button);
    ruleList.appendChild(li);
  }
}
// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedRules = JSON.parse(localStorage.getItem("rules"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedRules !== null) {
    rules = storedRules;
  }

  // This is a helper function that will render todos to the DOM
  renderRules();
}

function storeRules() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("rules", JSON.stringify(rules));
}

// Add submit event to form
ruleForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var ruleText = ruleInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (ruleText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  rules.push(ruleText);
  ruleInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeRules();
  renderRules();
});

// Add click event to todoList element
ruleList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    rules.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeRules();
    renderRules();
  }
});

// Calls init to retrieve data and render it to the page on load
init()
