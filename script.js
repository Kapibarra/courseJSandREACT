const numberOfFilms = +prompt("How much films?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};


const a = prompt("which  films?", ""),
    b = prompt("Raiting?", ""),
    c = prompt("which films?", ""),
    d = prompt("Raiting?", "");

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

console.log(personalMovieDB);