const numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Какие фильмы?", "");
    b = prompt("Оценка фильма?", "");

    personalMovieDB.movies[a] = b
}

console.log(personalMovieDB);