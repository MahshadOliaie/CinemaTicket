
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
    let d = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.querySelector(".date").textContent = d;
}

setInterval(checkDate, 1000)


function show() {
    document.querySelector(".genreFilter").classList.toggle("show")
}





