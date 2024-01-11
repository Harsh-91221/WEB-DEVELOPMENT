const quote = document.getElementById("quote");
const character = document.getElementById("character");
const api_URL = "https://animechan.xyz/api/random";
async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    character.innerHTML = data.character;
}
getQuote(api_URL);
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + character.innerHTML, "Tweet Window", "width=600", "height=300");
}