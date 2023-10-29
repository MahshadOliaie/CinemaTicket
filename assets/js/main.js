
// header actions
function showbar() {
    menu.classList.toggle("dnone");
}



window.addEventListener("load", function () {
    getMovies(null, "Drama");
    getMovies(null, "Action");
    getMovies(null, "Comedy");
})


function reload() {
    if (location.pathname !== "/") {
        history.pushState({}, "", "/")
    }
    window.location.reload(true);
    getMovies(null, "Drama");
    getMovies(null, "Action");
    getMovies(null, "Comedy");
}



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function checkDate() {
    let d = moment().format('llll');
    if (date) {
        date.textContent = d;
    }
}

setInterval(checkDate, 1000)


function show() {
    document.querySelector(".genreFilter").classList.toggle("show")
}




function checkPass() {
    let pass = document.querySelector("input[id='password']").value;
    if (event.target.value !== pass) {
        event.target.classList.add("bg-red-600")
        document.querySelector("button[id='submit']").classList.add("disable")
    }else{
        event.target.classList.remove("bg-red-600")
        document.querySelector("button[id='submit']").classList.remove("disable")
    }

}
