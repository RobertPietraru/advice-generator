//
const button = document.querySelector(".button");
const label = document.querySelector("h3");
const text = document.querySelector("h1");
var ran = false;
if (!ran) {
    fetch(`https://api.adviceslip.com/advice/${Math.random() * 224}`)
        .then((response) => response.json())
        .then((json) => {

            ran = true
            var advice = json['slip'];
            console.log(advice)
            label.innerHTML = `advice #${advice.id}`
            text.innerHTML = `"${advice.advice}"`
        });
}

button.addEventListener("click", function () {
    fetch(`https://api.adviceslip.com/advice/${Math.random() * 224}`)
        .then((response) => response.json())
        .then((json) => {
            var advice = json['slip'];
            console.log(json);
            console.log(advice)
            label.innerHTML = `advice #${advice.id}`
            text.innerHTML = `"${advice.advice}"`
        });

});
