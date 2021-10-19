import { Component } from 'react';
import AppHeader from "../appHeader/AppHeader";
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        selectedMovie: null,
        searchStr: ''
    }

    onMovieSelected = (item) => {
        this.setState({
            selectedMovie: item
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
                <div className="searchPanel">
                    <SearchPanel onSearch={this.onSearch} searchStr={this.state.searchStr} />
                    <AppFilter />
                </div>
                <main>
                    <div className="char__content">
                        <ErrorBoundary>
                           <CharList onMovieSelected={this.onMovieSelected} searchStr={this.state.searchStr} /> 
                        </ErrorBoundary>
                        
                        <ErrorBoundary>
                            <CharInfo selectedMovie={this.state.selectedMovie} />
                        </ErrorBoundary>
                        
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;