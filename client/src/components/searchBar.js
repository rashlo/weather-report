import React from 'react';
import ReactDom from 'react-dom';

class SearchBar extends React.Component {
     render() {
        return (
          <form>
            <input type="text" placeholder="Search..." />
            <p>
              <input type="checkbox" />
              {' '}
              Only show products in stock
            </p>
          </form>
        );
    }
}

ReactDom.render(
    <SearchBar />,
    document.getElementById('root')
);

export default SearchBar;