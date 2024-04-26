const movie = document.querySelector("input");
const button = document.querySelector("button");
const info = document.querySelector(".info");
const actors = document.querySelector(".actors");
const director = document.querySelector(".directors");
const released = document.querySelector(".released");
const genre = document.querySelector(".genre");
const awards = document.querySelector(".awards");
const imdb = document.querySelector(".imdb");
const image = document.querySelector(".image");
const plot = document.querySelector(".plot");


button.addEventListener("click", () => {
    if (movie.value.trim().length > 0) {
        const movieName = movie.value;
        getInfo(movieName);
    }

})

const getInfo = async (movieName) => {
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=7ec845b1`;
    let request;
    let response;
    try {
        request = await fetch(url);
        response = await request.json();
    } catch (error) {
        console.log(error);
    }



    actors.innerHTML = "Actors : " + `<span class='text-light'>${response.Actors}</span>`;
    director.innerHTML = "Director : " + `<span class='text-light'>${response.Director}</span>`;
    released.innerHTML = "Released : " + `<span class='text-light'>${response.Released}</span>`;
    genre.innerHTML = "Genre : " + `<span class='text-light'>${response.Genre}</span>`;
    awards.innerHTML = "Awards : " + `<span class='text-light'>${response.Awards}</span>`;
    imdb.innerHTML = "IMDB Rating : " + `<span class='text-light'>${response.imdbRating}</span>`;
    plot.innerHTML = "Plot : " + `<span class='text-light'>${response.Plot}</span>`;
    image.src = `${response.Poster}`;

    info.classList.remove("d-none");
    plot.classList.remove("d-none");
}






