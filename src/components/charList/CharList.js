import React, { Component } from 'react';
import MovieService from '../../services/MovieService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
// import PropTypes from 'prop-types';

import './charList.scss';
import posterNotFound from '../../resources/img/movie-poster-coming-soon.png';

class CharList extends Component {
    state = {
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

    componentDidUpdate(prevProps) {
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

    onMoviesLoaded = (movies) => {
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

    onSearchMovies = (searchStr) => {
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
    
    filterMovies = arr => {
        if(this.props.selectedGenre) { 
            return arr.filter(movie => movie.genres.includes(+this.props.selectedGenre))
        }
        return arr
    }

    itemRefs = [];
    // Fix selected items after filter
    setRef = (ref) => {
        if(ref) {
           this.itemRefs.push(ref); 
        } else {
            this.itemRefs = [];
        }
        
    }

    selectedItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
    }

    renderMovies = (arr, start, end) => {      
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

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )   
    }

    render() {
        const {movies, start, end, loading, newItemLoading, error} = this.state;
        const items = this.renderMovies(this.filterMovies(movies), start, end);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading || newItemLoading ? <Spinner/> : null;
        const content = !(loading || newItemLoading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
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
                        disabled={(end >= movies.length) ? true : false}
                        onClick={() => this.onNextPage()}
                        >
                        <div className="inner">next page</div>
                    </button>    
                </div>
            </div>
        )
    }
}

// CharList.propTypes = {
//     onMoviesSelected: PropTypes.func.isRequired
// }

export default CharList;