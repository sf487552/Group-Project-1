var drinkButton = document.getElementById("modal-drink")
var instructions = document.getElementById("modal-how")

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
instructions.addEventListener("click", function () {

});