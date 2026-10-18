// script.js - Let's add some interactivity to make our web development journey exciting!

document.getElementById('funButton').addEventListener('click', function() {
    const funText = document.getElementById('funText');
    funText.innerHTML = '🎉 Congratulations on taking your first step into web development with CS 140! 🎉';
});

let y=20;
console.log(y);
alert("The value of y is 20")

if (y>25) {
    console.log('Y is greater than 25');
    
} else {
    console.log('Y is not greater than 25');
}