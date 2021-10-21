class MovieService {
    _apiBase = 'http://api.themoviedb.org/3/movie/';
    _posterBase = 'http://image.tmdb.org/t/p/w500';
    _searchBase = 'http://api.themoviedb.org/3/search/movie';
    _genresBase = 'http://api.themoviedb.org/3/genre/movie/list';
    _apiKey = 'api_key=f1137cbdf4e49f5e77f6cd84d2971b53';


    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        return res.json();
    }

    getPopularMovies = async (page=1) => {
        let end = false;
        const arr = [];

        while(!end) {
            const res = await this.getResource(`${this._apiBase}popular/?${this._apiKey}&page=${page}`);

            if(page === res.total_pages || page === 5) {
                end = true;
            }

            arr.push(...res.results.map(this._transformMovies));
            page++;
        }
        
        return arr;
    }

    getMovie = async (id) => {
        const res = await this.getResource(`${this._apiBase}${id}?${this._apiKey}`);

        return this._transformMovie(res)
    }

    searchMovie = async (string, page=1) => {
        let end = false;
        const arr = [];

        while(!end) {
            const res = await this.getResource(`${this._searchBase}?${this._apiKey}&query=${string}&page=${page}`)

            if(page === res.total_pages || page === 5) {
                end = true;
            }

            arr.push(...res.results.map(this._transformMovies));
            page++;
        }

        return arr;
    }

    getGenres = async () => {
        const res = await this.getResource(`${this._genresBase}?${this._apiKey}`);
        
        return res.genres;
    }

    _transformMovies = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            poster: this._posterBase + movie.poster_path,
            release: movie.release_date,
            genres: movie.genre_ids ? movie.genre_ids : null,
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