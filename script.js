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


window.onload = sendApiRequest
async function sendApiRequest(){
  var response = await fetch ("https://opentdb.com/api.php?amount=50&type=multiple&encode=url3986");
  console.log(response)
  var data = await response.json()
  console.log(data)
}



  
