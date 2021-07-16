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

function displayCocktail(myModal) {
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/random.php" + myModal,
        type:"GET" ,
        success: function (result) {
            var modal = $("mod-content");
            modal.html (result);
        }
    })
}