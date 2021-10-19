import { Component } from 'react';
import MovieService from '../../services/MovieService';
import "./appFilter.scss";

class AppFilter extends Component {
    state = {
        genres: []
    }

    movieService = new MovieService();

    componentDidMount() {
        this.movieService.getGenres()
    }

    render() {
        return (
            <div className='appFilter'>
                <span>Genres filter: </span>
                <select className='appFilter__select'>
                    <option>$</option>
                    <option>$</option>
                    <option>$</option>
                    <option>$</option>
                </select>
            </div>
        )
    }

}

export default AppFilter;