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

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b
        console.log('Done')
    } else {
        i--;
        console.log('Error')
    }

    personalMovieDB.movies[a] = b
}

if (personalMovieDB.count < 10) {
    console.log("Мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Среднее количество фильмов")
} else if (personalMovieDB.count > 30) {
    console.log("Киноман")
} else {
    console.log("error")
}
console.log(personalMovieDB);