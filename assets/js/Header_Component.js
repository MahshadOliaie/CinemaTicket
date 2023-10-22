

class customHeader extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }


    connectedCallback() {

        //css
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "./assets/css/main.min.css");



        const shadow = this.attachShadow({ mode: "open" });


        // logo div
        const logoDiv = document.createElement("div");
        logoDiv.setAttribute("class", "logo HeaderDiv");

        const logoImg = document.createElement("img");
        logoImg.setAttribute("alt", "logo")
        logoImg.setAttribute("class" , "imgLogo")
        logoImg.setAttribute("src", "./assets/images/logo.png");

        logoDiv.appendChild(logoImg)


        // navigation
        const nav = document.createElement("div");
        nav.setAttribute("class", "nav HeaderDiv");

        const home = document.createElement("p");
        home.setAttribute("class", "home Pheader");
        home.setAttribute("onclick", "reload()");
        home.textContent = "Home";

        const ticket = document.createElement("p");
        ticket.setAttribute("onclick", "renderTicket()");
        ticket.setAttribute("class" , "Pheader")
        ticket.textContent = "My Tickets";

        const movies = document.createElement("p");
        movies.setAttribute("onclick", "getMovies([])");
        movies.setAttribute("class" , "Pheader")
        movies.textContent = "Movies";

        const cinema = document.createElement("p");
        cinema.setAttribute("onclick", "getCinemas()");
        cinema.setAttribute("class" , "Pheader")
        cinema.textContent = "Cinema";

        nav.appendChild(home);
        nav.appendChild(ticket);
        nav.appendChild(movies);
        nav.appendChild(cinema);


        //login
        const loginDiv = document.createElement("div");
        loginDiv.setAttribute("class", "login HeaderDiv");

        const login = document.createElement("a");
        login.setAttribute("href", "#");
        login.setAttribute("id", "login");
        login.textContent = "Log In";

        const signup = document.createElement("a");
        signup.setAttribute("href", "#");
        signup.setAttribute("id", "signup");
        signup.textContent = "Sign Up";

        const bar = document.createElement("svg");
        const path = document.createElement("path");
        path.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z")
        bar.setAttribute("xmlns", "http://www.w3.org/2000/svg")
        bar.setAttribute("id", "bars");
        bar.setAttribute("height", "1em");
        bar.setAttribute("onclick", "showbar()");
        bar.setAttribute("viewBox", "0 0 512 512");
        bar.appendChild(path)

        loginDiv.appendChild(bar);
        loginDiv.appendChild(login);
        loginDiv.appendChild(signup);



        //menu
        const menuDiv = document.createElement("div");
        menuDiv.setAttribute("class", "menu dnone HeaderDiv");


        //nav
        const menuNav = document.createElement("div");
        menuNav.setAttribute("class", "Menu__nav HeaderDiv");

        const menuHome = document.createElement("p");
        menuHome.setAttribute("onclick", "reload()");
        menuHome.setAttribute("class" , "Pheader pMenu")
        menuHome.textContent = "Home";

        const menuTicket = document.createElement("p");
        menuTicket.setAttribute("onclick", "renderTicket()");
        menuTicket.setAttribute("class" , "Pheader pMenu")
        menuTicket.textContent = "My Tickets";

        const menuMovies = document.createElement("p");
        menuMovies.setAttribute("onclick", "getMovies([])");
        menuMovies.setAttribute("class" , "Pheader pMenu")
        menuMovies.textContent = "Movies";

        const menuCinema = document.createElement("p");
        menuCinema.setAttribute("onclick", "getCinemas()");
        menuCinema.setAttribute("class" , "Pheader pMenu")
        menuCinema.textContent = "Cinema";

        menuNav.appendChild(menuHome);
        menuNav.appendChild(menuTicket);
        menuNav.appendChild(menuMovies);
        menuNav.appendChild(menuCinema);


        //login
        const loginDivMenu = document.createElement("div");
        loginDivMenu.setAttribute("class", "login HeaderDiv loginMenu");

        const loginMenu = document.createElement("a");
        loginMenu.setAttribute("href", "#");
        loginMenu.setAttribute("id", "Menu__login");
        loginMenu.textContent = "Log In";

        const signupMenu = document.createElement("a");
        signupMenu.setAttribute("href", "#");
        signupMenu.setAttribute("id", "Menu__signup");
        signupMenu.textContent = "Sign Up";

        loginDivMenu.appendChild(loginMenu);
        loginDivMenu.appendChild(signupMenu)


        menuDiv.appendChild(menuNav);
        menuDiv.appendChild(loginDivMenu);

        //--------------------------------------------------
        //append all
        shadow.appendChild(linkElem)
        shadow.appendChild(logoDiv)
        shadow.appendChild(nav)
        shadow.appendChild(loginDiv)
        shadow.appendChild(menuDiv)


        menu = document.querySelector(".menu")
    }


}




customElements.define("custom-header", customHeader);