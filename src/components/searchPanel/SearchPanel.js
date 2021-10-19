import { Component } from 'react';
import './searchPanel.scss';

class SearchPanel extends Component {
    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Search movies"
                    value={this.props.searchStr}
                    onChange={this.props.onSearch}/>
        )
    }
}

export default SearchPanel;