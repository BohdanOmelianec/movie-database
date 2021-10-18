class MovieService {
    _apiBase = 'https://api.themoviedb.org/3/movie/';
    _posterBase = 'https://image.tmdb.org/t/p/w500';
    _apiKey = 'api_key=f1137cbdf4e49f5e77f6cd84d2971b53';


    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        return res.json();
    }

    getPopularMovies = async (page=1) => {
        const res = await this.getResource(`${this._apiBase}popular/?${this._apiKey}&page=${page}`);
        return res.results.map(this._transformMovies)
    }


    getMovie = async (id) => {
        const res = await this.getResource(`${this._apiBase}${id}?${this._apiKey}`);
        return this._transformMovie(res)
    }

    _transformMovies = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            poster: this._posterBase + movie.poster_path
        }
    }

    _transformMovie = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            poster: this._posterBase + movie.poster_path,
            overview: movie.overview ? `${movie.overview}...` : "There is no available overview.",
            release: movie.release_date,
            genres: movie.genres ? movie.genres : null,
            homepage: movie.homepage ? movie.homepage : null
        }
    }
}

export default MovieService;