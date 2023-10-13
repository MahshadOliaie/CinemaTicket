
// header actions
function showbar() {
    document.querySelector(".menu").classList.toggle("dnone");
}



function reload() {
    window.location.reload(true);
}



window.addEventListener("load", function () {
    getMovies(null, "Drama");
    getMovies(null, "Action");
    getMovies(null, "Comedy");
})





function checkDate() {
    const d = new Date();
    document.querySelector(".date").textContent = d;
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hour == 0 && minutes == 0 && seconds == 0) {
        localStorage.clear();
    }
}

setInterval(checkDate, 1000)





