const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");
const hamburger = document.querySelector("#hamburger");
const options = document.querySelector("#options");

const NO_POSTER = "https://placehold.co/300x450/18181b/a1a1aa?text=No+Poster";

movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let query = movieInput.value.trim();
    if (!query) {
        return;
    }
    searchMovies(query);
});

async function searchMovies(movieName) {
    movieHub.innerHTML = `<div class="col-span-full flex justify-center py-20"><span class="loader"></span></div>`;

    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=ef9ff179&s=${encodeURIComponent(movieName)}`);
        let data = await response.json();

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            movieHub.innerHTML = `<p class="col-span-full text-center text-red-400 py-16 text-lg">${data.Error || 'No movies found.'}</p>`;
        }
    } catch (error) {
        movieHub.innerHTML = `<p class="col-span-full text-center text-red-400 py-16 text-lg">Error loading movies. Please try again.</p>`;
    }
}

function displayMovies(movies) {
    movieHub.innerHTML = "";

    movies.forEach((movie) => {
        const div = document.createElement("div");

        div.dataset.imdbID = movie.imdbID;
        div.className = "movie-card bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-500 hover:scale-105 cursor-pointer transition flex flex-col group";

        const poster = (movie.Poster && movie.Poster !== "N/A") ? movie.Poster : NO_POSTER;
        console.log({poster , mp :movie.Poster });

        div.innerHTML = `
            <img 
                src="${poster}" 
                alt="${movie.Title}" 
                class="w-full h-80 object-cover"
            >
            <div class="p-4 flex-1 flex flex-col justify-between">
                <h3 class="font-semibold text-white text-base group-hover:text-red-500 transition-colors">${movie.Title}</h3>
                <p class="text-sm text-red-500 font-medium mt-2">${movie.Year}</p>
            </div>
        `;
        movieHub.append(div);
    });
}

movieHub.addEventListener("click", (e) => {
    e.stopPropagation();
    const movieCard = e.target.closest(".movie-card");
    if (movieCard && movieCard.dataset.imdbID) {
        const imdbID = movieCard.dataset.imdbID;
        location.href = `MovieDetail.html?id=${imdbID}`;
    }
});

let data = [
    {
        "Title": "Godzilla",
        "Year": "2014",
        "imdbID": "tt0831387",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODE2NTdmMmYtY2U1OS00MjExLWIwNjQtYjQ5NTA0ZDZmZjZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "Title": "Godzilla vs. Kong",
        "Year": "2021",
        "imdbID": "tt5034838",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjZlYjUwZjItZmQ1ZS00NDU2LWFhNWMtMGRmMmZiMzliY2NhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla: King of the Monsters",
        "Year": "2019",
        "imdbID": "tt3741700",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDVhMjk2OGUtYzYxNS00NzBjLTk5YTItYzI0ZjgzNjY1NmI0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla",
        "Year": "1998",
        "imdbID": "tt0120685",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzdmYmUzYjAtMmJhNi00NGU3LWJiODYtM2I5MGFhZjBhM2NhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla Minus One",
        "Year": "2023",
        "imdbID": "tt23289160",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjc5MjllMGUtMDIwMS00ZDVkLWEzODQtM2NlMTMwMTZhNThmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla X Kong: The New Empire",
        "Year": "2024",
        "imdbID": "tt14539740",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "Title": "Shin Godzilla",
        "Year": "2016",
        "imdbID": "tt4262980",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjg5ODA1NzQtZmNmNy00MmFhLTk1YjUtYTM2NDNmNjY4ODA1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Godzilla",
        "Year": "1954",
        "imdbID": "tt0047034",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTk3M2U3YjMtZDkzYS00OGU5LWEwOTctMDZhNTE0ZDYxZmJjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "King Kong vs. Godzilla",
        "Year": "1963",
        "imdbID": "tt0056142",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWRiNzYzN2ItN2QxOC00Y2ZiLThjYWItZGI5ODA2MWM4ZDllXkEyXkFqcGc@._V1_QL75_UX380_CR0,6,380,562_.jpg"
    },
    {
        "Title": "Mothra vs. Godzilla",
        "Year": "1964",
        "imdbID": "tt0058379",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmNmMGRhNjAtMTUyNS00NTAyLTgxMzQtNzk1ZGI2MzczYWUwXkEyXkFqcGc@._V1_SX300.jpg"
    }
]

displayMovies(data);

if (hamburger && options) {
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        options.classList.toggle("hidden");
        options.classList.toggle("flex");
    });
}