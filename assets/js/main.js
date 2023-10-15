
// header actions
function showbar() {
    document.querySelector(".menu").classList.toggle("dnone");
}



window.addEventListener("load", function () {
    getMovies(null, "Drama");
    getMovies(null, "Action");
    getMovies(null, "Comedy");
})



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




function checkDate() {
    const d = new Date();
    if (document.querySelector(".date"))
        document.querySelector(".date").textContent = d;
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hour == 0 && minutes == 0 && seconds == 0) {
        localStorage.clear();
    }
}

setInterval(checkDate, 1000)


function show() {
    document.querySelector(".genreFilter").classList.toggle("show")
}





