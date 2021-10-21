import { Component } from 'react';
import MovieService from '../../services/MovieService';

import "./appFilter.scss";

type MyProps = {
    onGenreSelected: React.ChangeEventHandler<HTMLSelectElement>;
};

type MyState = {
    genres: string[]; 
    error: boolean;
};

class AppFilter extends Component<MyProps, MyState> {
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

    onGenresLoaded = (genres: string[]) => {
        this.setState({
            genres
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems = (arr: {id: number, name: string}[]) => {
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