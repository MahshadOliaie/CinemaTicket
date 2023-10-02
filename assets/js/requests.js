

function getDrama(){
    fetch("assets/movies.json")
    .then(res=> res.json())
    .then(data=> renderHome(data,"Drama"))
}

function getAction(){
    fetch("assets/movies.json")
    .then(res=> res.json())
    .then(data=> renderHome(data,"Action"))
}

function getComedy(){
    fetch("assets/movies.json")
    .then(res=> res.json())
    .then(data=> renderHome(data,"Comedy"))
}