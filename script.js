

fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('category=15 \n----------');
    console.log(data);
  });