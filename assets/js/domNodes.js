
let dramaSection = document.getElementById("drama");
let ActionSection = document.getElementById("Action");
let comedySection = document.getElementById("comedy");
let allMovies = []
let root = document.querySelector(".body")
let moviesTicket = JSON.parse(localStorage.getItem("ticket")) ||[]
let resevedSeatNumber = [];