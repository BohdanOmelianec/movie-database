import { Component } from 'react';
import MovieService from '../../services/MovieService';

import "./appFilter.scss";

class AppFilter extends Component {
    state = {
        genres: [],
        error: false
    }

    movieService = new MovieService();

    componentDidMount() {
        this.movieService.getGenres()
            .then(this.onGenresLoaded)
            .catch(this.onError)
    }

    onGenresLoaded = (genres) => {
        this.setState({
            genres
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems = (arr) => {
        return arr.map(genre => {
            return (
                <option key={genre.id} value={genre.id} >{genre.name}</option>
            )
        });
    }

    render() {
        const {genres} = this.state;
        const content = this.renderItems(genres)

        return (
            <div className='appFilter'>
                <span className='appFilter__label'>Genres filter: </span>
                <select onChange={this.props.onGenreSelected} className='appFilter__select'>
                    <option></option>
                    {content}
                </select>
            </div>
        )
    }

}

export default AppFilter;