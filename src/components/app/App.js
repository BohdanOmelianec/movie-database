import { Component } from 'react';
import AppHeader from "../appHeader/AppHeader";
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


class App extends Component {
    state = {
        selectedMovie: null,
        selectedGenre: '',
        searchStr: ''
    }

    onMovieSelected = (item) => {
        this.setState({
            selectedMovie: item
        })
    }

    onGenreSelected = (e) => {
        this.setState({
            selectedGenre: e.target.value
        })
    }

    onSearch = (e) => {
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
                    <div className="char__content">
                        <ErrorBoundary>
                           <CharList 
                                onMovieSelected={this.onMovieSelected}
                                searchStr={this.state.searchStr}
                                selectedGenre={this.state.selectedGenre} /> 
                        </ErrorBoundary>
                        
                        <ErrorBoundary>
                            <CharInfo selectedMovie={this.state.selectedMovie} />
                        </ErrorBoundary>
                    </div>
                </main>
            </div>
        )
    }
}

export default App;