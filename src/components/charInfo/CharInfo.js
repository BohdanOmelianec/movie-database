import { Component } from 'react';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';

import MovieService from '../../services/MovieService';
import posterNotFound from '../../resources/img/movie-poster-coming-soon.png'
import './charInfo.scss';

class CharInfo extends Component {
    state = {
        movie: null,
        loading: false,
        error: false   
    }

    movieService = new MovieService();

    componentDidMount() {
        this.updateMovie();
    }

    componentDidUpdate(prevProps) {
        if(this.props.selectedMovie !== prevProps.selectedMovie) {
            this.updateMovie();
        }
    }

    updateMovie = () => {
        const {selectedMovie} = this.props;

        if(!selectedMovie) {
            return;
        }
        
        this.onMovieLoading();
        this.movieService.getMovie(selectedMovie.id)
            .then(this.onMovieLoaded)
            .catch(this.onError);
    }

    onMovieLoaded = (movie) => {
        this.setState({
            movie,
            loading: false
        })
    }

    onMovieLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const {movie, loading, error} = this.state;

        const skeleton = movie || loading || error ? null : <Skeleton/>
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !movie) ? <View movie={movie}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({movie}) => {
    const {title, overview, release, genres, poster, homepage} = movie;
    const genresName = genres.map(genre => genre.name).join(', ')
    const posterImg = (poster === 'https://image.tmdb.org/t/p/w500null') ? posterNotFound : poster;
    
    return (
        <>
            <div className="char__basics">
                <img src={posterImg} alt={title}/>
                <div>
                    <div className="char__info-name">{title}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main" target='_blanc'>
                            <div className="inner">
                                {
                                    homepage ? 'Homepage' : 'There is no homepage'
                                }
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr"><b>Release:</b> {release}</div>
            <div className="char__descr"><b>Genres:</b> {genresName}</div>
            <div className="char__descr">{overview}</div>
        </>
    );
}

export default CharInfo;