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
var currentQuestion = 0;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('a');
var opt2 = document.getElementById('b');
var opt3 = document.getElementById('c');
var opt4 = document.getElementById('d');
//var nextButton = document.getElementById('nextButton');


/*Load questions*/
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.a;
	opt2.textContent = q.b;
	opt3.textContent = q.c;
	opt4.textContent = q.d;
};


window.onload = sendApiRequest
async function sendApiRequest(){
  var response = await fetch ("https://opentdb.com/api.php?amount=50&type=multiple&encode=url3986");
  console.log(response)
  var data = await response.json()
  console.log(data)
}





  
