import { Component } from 'react';
import AppHeader from "../appHeader/AppHeader";
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import MovieList from "../movieList/MovieList";
import MovieInfo from "../movieInfo/MovieInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

type AppState = {
    selectedMovie: null | {},
    selectedGenre:string;
    searchStr: string;
}
class App extends Component<any, AppState> {
    state: AppState = {
        selectedMovie: null,
        selectedGenre: '',
        searchStr: ''
    }
    

    onMovieSelected = (item: object) => {
        this.setState({
            selectedMovie: item
        })
    }

    onGenreSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedGenre: e.target.value
        })
    }

    onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchStr = e.target.value;
        this.setState({searchStr});
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search__panel">
                    <SearchPanel onSearch={this.onSearch} searchStr={this.state.searchStr} />
                    <AppFilter onGenreSelected={this.onGenreSelected} />
                </div>
                <main>
                    <div className="movie__content">
                        <ErrorBoundary>
                           <MovieList 
                                onMovieSelected={this.onMovieSelected}
                                searchStr={this.state.searchStr}
                                selectedGenre={this.state.selectedGenre} /> 
                        </ErrorBoundary>
                        
                        <ErrorBoundary>
                            <MovieInfo selectedMovie={this.state.selectedMovie} />
                        </ErrorBoundary>
                    </div>
                </main>
            </div>
        )
    }
}

export default App;