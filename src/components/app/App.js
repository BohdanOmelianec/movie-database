import { Component } from 'react';
import AppHeader from "../appHeader/AppHeader";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        selectedMovie: null
    }

    onMovieSelected = (item) => {
        this.setState({
            selectedMovie: item
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <div className="char__content">
                        <ErrorBoundary>
                           <CharList onMovieSelected={this.onMovieSelected} /> 
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