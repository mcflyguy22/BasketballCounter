let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

function increaseHome(num){
    homeScore += num;
    homeEl.textContent = homeScore
}

function increaseGuest(num){
    guestScore += num;
    guestEl.textContent = guestScore
}
