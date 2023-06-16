// initialize home and guest scores
let score_home = 0
let score_guest = 0
// send to the respective HTML elements the initial scores for display
document.getElementById("home-el").textContent = score_home
document.getElementById("guest-el").textContent = score_guest

// grab the html element for home score update
let homeEl = document.getElementById("home-el")

// define the the functions for the buttons
function hplus1() {
    score_home += 1
    homeEl.textContent = score_home
}

function hplus2() {
    score_home += 2
    homeEl.textContent = score_home
}

function hplus3() {
    score_home += 3
    homeEl.textContent = score_home
}

// grab the html element for guess score update
let guestEl = document.getElementById("guest-el")

// define the the functions for the buttons
function gplus1() {
    score_guest += 1
    guestEl.textContent = score_guest
}

function gplus2() {
    score_guest += 2
    guestEl.textContent = score_guest
}

function gplus3() {
    score_guest += 3
    guestEl.textContent = score_guest
}