import { Component } from 'react';
import MovieService from '../../services/MovieService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';
import posterNotFound from '../../resources/img/movie-poster-coming-soon.png';

type MoviesArr = {
    title: string;
    poster: string;
    genres: number[];
    release: string;
    id: number;
}[]

type CLState = {
    movies: MoviesArr;
    page: number;
    start: number;
    end: number;
    loading: boolean;
    newItemLoading: boolean;
    error: boolean;
}

type CLProps = {
    onMovieSelected: Function;
    searchStr: string;
    selectedGenre: string; 
}

class CharList extends Component<CLProps, CLState> {
    state: CLState = {
        movies: [],
        page: 1,
        start: 0,
        end: 10,
        loading: true,
        newItemLoading: false,
        error: false
    }

    movieService = new MovieService();

    componentDidMount() {
        this.getMovies()
    }

    componentDidUpdate(prevProps: {searchStr: string}) {
        if(this.props.searchStr !== prevProps.searchStr) { 
            if(!this.props.searchStr) {
                this.getMovies(); 
            } else {
                this.setState({
                    start: 0,
                    end: 10
                })
                this.onMoviesListLoading();
                this.onSearchMovies(this.props.searchStr);  
            }
        }
    }

    getMovies = () => {
        this.movieService.getPopularMovies()
            .then(this.onMoviesLoaded)
            .catch(this.onError);
    }

    onMoviesLoaded = (movies: MoviesArr) => {
        this.setState({
            movies: movies.sort((a, b) => (a.release < b.release) ? -1 : 1).reverse(),
            loading: false,
            newItemLoading: false
        })
    }

    onMoviesListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onPreviousPage = () => {
        this.setState({
            start: this.state.start - 10,
            end: this.state.end - 10
        })
    }

    onNextPage = () => {
        this.setState({
            start: this.state.start + 10,
            end: this.state.end + 10
        })
    }

    onSearchMovies = (searchStr: string) => {
        this.movieService.searchMovie(searchStr)
            .then(this.onMoviesLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }
    
    filterMovies = (arr: MoviesArr) => {
        if(this.props.selectedGenre) { 
            return arr.filter(movie => movie.genres.includes(+this.props.selectedGenre))
        }
        return arr
    }

    itemRefs: HTMLElement[] = [];
    // Fix selected items after filter
    setRef = (ref: never) => {
        if(ref) {
           this.itemRefs.push(ref); 
        } else {
            this.itemRefs = [];
        }
        
    }

    selectedItem = (id: number) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
    }

    renderMovies = (arr: MoviesArr, start: number, end: number) => {      
        const items = arr.slice(start, end).map((movie, i) => {

            if(movie.poster === 'https://image.tmdb.org/t/p/w500null') {
                movie.poster = posterNotFound;
            }

            return (
                <li 
                    className="char__item"
                    key={movie.id}
                    ref={this.setRef}
                    onClick={() => {
                        this.props.onMovieSelected(movie);
                        this.selectedItem(i)
                    }}>
                    <img src={movie.poster} alt={movie.title} />
                    <div className="char__name">{movie.title}</div>
                </li>
            )
        });
  
        return items;
    }

    render() {
        const {movies, start, end, loading, newItemLoading, error} = this.state;
        const items = this.renderMovies(this.filterMovies(movies), start, end);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading || newItemLoading ? <Spinner/> : null;
        const content = !(loading || newItemLoading || error) ? items : null;
        const contentLength = this.filterMovies(movies).length || 0;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                <ul className="char__grid">
                    {content}
                </ul>
                <div className='char__buttons'>
                    <button 
                        className="button button__main button__long"
                        disabled={(start <= 0) ? true : false}
                        onClick={() => this.onPreviousPage()}
                        >
                        <div className="inner">previous page</div>
                    </button>
                    <button 
                        className="button button__main button__long"
                        disabled={(end >= contentLength) ? true : false}
                        onClick={() => this.onNextPage()}
                        >
                        <div className="inner">next page</div>
                    </button>    
                </div>
            </div>
        )
    }
}

export default CharList;