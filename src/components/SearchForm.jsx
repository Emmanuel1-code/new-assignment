import React from 'react'
import './Style.css';

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-bar'>
        <input type='text'placeholder='Search' className='search-input' />
        <div className='search-buttons'>
            <input type='submit' value="Google Search" className='search-button' />
            <input type='submit' value="I'm Feeling Lucky" className='feeling-lucky-button' />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;