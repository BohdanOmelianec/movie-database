import React, { Component } from 'react';
import './charList.scss';
import MovieService from '../../services/MovieService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
// import PropTypes from 'prop-types';

import posterNotFound from '../../resources/img/movie-poster-coming-soon.png'

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
            this.onSearchMovies(this.props.searchStr, this.state.page);
        }
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

    onRequest = (page) => {
        if(this.props.searchStr) {
            this.onMoviesListLoading();
            this.onChangePage();
            this.onSearchMovies(this.props.searchStr, page + 1)
        } else {
            this.onMoviesListLoading();
            this.onChangePage();
            this.movieService.getPopularMovies(page + 1)
                .then(this.onMoviesLoaded)
                .catch(this.onError) 
        }
        
    }

    onSearchMovies = (searchStr, page) => {
        this.movieService.searchMovie(searchStr, page)
            .then(this.onMoviesLoaded)
            .catch(this.onError)
    }

    onChangePage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }


    renderMovies = (arr) => {
        const items = arr.map((movie) => {
            if(movie.poster === 'https://image.tmdb.org/t/p/w500null') {
                movie.poster = posterNotFound;
            }
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