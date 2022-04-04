import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeHolder, handleChange}) => (
  <div>
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={handleChange}
    />
  </div>
);

// (e) => this.setState({ searchField: e.target.value }, () => console.log(this.state))