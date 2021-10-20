import { Component } from 'react';
import './searchPanel.scss';

class SearchPanel extends Component {
    render() {
        return (
            <input type="text"
                    className="search__input"
                    placeholder="Search movies"
                    value={this.props.searchStr}
                    onChange={this.props.onSearch}/>
        )
    }
}

export default SearchPanel;