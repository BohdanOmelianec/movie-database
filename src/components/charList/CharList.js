import React, { Component } from 'react';
import './charList.scss';
import MovieService from '../../services/MovieService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
// import PropTypes from 'prop-types';

class CharList extends Component {
    state = {
        movies: [],
        page: 1,
        loading: true,
        error: false
    }

    movieService = new MovieService();

    componentDidMount() {
        this.movieService.getPopularMovies(this.state.page)
            .then(this.onMoviesLoaded)
            .catch(this.onError);
    }

    componentDidUpdate(prevProps) {
        if(!this.props.searchStr) return;  

        if(this.props.searchStr !== prevProps.searchStr) {
            this.onMoviesListLoading();
            this.onSearchMovies(this.props.searchStr);
        }
    }

    onMoviesLoaded = (movies) => {
        this.setState({
            movies,
            loading: false,
            page: this.state.page + 1
        })
    }

    onMoviesListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onRequest = (page) => {
        this.onMoviesListLoading();
        this.movieService.getPopularMovies(page)
            .then(this.onMoviesLoaded)
            .catch(this.onError)
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


    renderMovies = (arr) => {
        const items = arr.map((movie) => {
            
            return (
                <li 
                    className="char__item"
                    key={movie.id}
                    onClick={() => {
                        this.props.onMovieSelected(movie);
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
        const {movies, page, loading, error} = this.state;
        const items = this.renderMovies(movies);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        const style = {
            display: page <= 500 ? 'block' : 'none'
        }


        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button 
                    className="button button__main button__long"
                    onClick={() => this.onRequest(page)}
                    style={style}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

// CharList.propTypes = {
//     onCharSelected: PropTypes.func.isRequired
// }

export default CharList;