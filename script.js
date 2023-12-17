document.addEventListener('DOMContentLoaded', function () {
    var newMovieInput = document.getElementById('newMovie');
    var movieList = document.getElementById('movieList');

    newMovieInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addMovie();
        }
    });

    window.addMovie = function () {
        var movieText = newMovieInput.value;

        if (movieText.trim() !== '') {
            var newMovieItem = document.createElement('li');
            newMovieItem.textContent = movieText;

            newMovieItem.addEventListener('click', function () {
                newMovieItem.classList.toggle('watched');
            });

            newMovieItem.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                movieList.removeChild(newMovieItem);
            });

            movieList.appendChild(newMovieItem);
            newMovieInput.value = '';
        }
    };
});
