const hamburger = document.querySelector('#toggle-btn');

hamburger.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("expand");
})

// This script ensures that the spinner buttons are hidden in Firefox.
var numberInput = document.querySelector('.no-spinner');
numberInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
    }
});