

function showMovie(movie) {
    const { name, id, image, trailer, director, time, rate, about, country, language, genre, moreImages } = movie[0];

    let countriesStr = country.join(", ");
    let languageStr = language.join(", ")

    root.innerHTML = `<section class="showOneMovie">
    <div class="videoBox">
        <video width="100%" height="100%" controls autoplay muted>
            <source
                src="${trailer}"
                type="video/mp4">
        </video>
    </div>
    <div class="about">
        <div class="about__poster"><img
                src="${image}"
                alt=""></div>
        <div class="about__text">
            <h1 class="about__text__title">${name}</h1>
            <p class="about__text__director">${director}</p>
            <div class="about__text__genres">
            </div>
            <p class="about__text__time"><span>Time:</span> ${time}</p>
            <p class="about__text__rate"><svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <style>
                        svg {
                            fill: #f8c24f
                        }
                    </style>
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg> ${rate}</p>
            <p class="about__text__description">${about}</p>
            <p class="about__text__countries"><span>Countries:</span> ${countriesStr}</p>
            <p class="about__text__lang"><span>Language:</span> ${languageStr}</p>
        </div>
    </div>
    <div class="bookBtn">LET'S FIND CINEMA</div>
    <div class="gallery">
    </div>
</section>`;

    let genreTemplate = genre.map(item => {
        return `<p class="about__text__genres__genre">${item}</p>`
    }).join("");
    document.querySelector(".about__text__genres").innerHTML = genreTemplate;


    let imagesTemplate = moreImages.map(image => {
        return `<div class="img" style="background-image: url('${image}');"></div>`
    }).join("");
    document.querySelector(".gallery").innerHTML = imagesTemplate;

    root.classList.remove("allMovies");
    root.classList.remove("cinemas");
    root.classList.remove("showCinema")

}