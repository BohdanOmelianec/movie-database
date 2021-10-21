import { Component } from 'react';
import './searchPanel.scss';

type SPProps = {
    searchStr: string;
    onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

class SearchPanel extends Component<SPProps> {
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