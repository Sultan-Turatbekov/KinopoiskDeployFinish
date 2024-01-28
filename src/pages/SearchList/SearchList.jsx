import React from 'react';
import { useSelector } from 'react-redux';
import SearchCard from '../SearchCard/SearchCard';
import './SearchListStyles.scss';

const SearchList = () => {
  const searchList = useSelector((state) => state.SearchList.searchData);

  if (searchList.length === 0) {
    return (
      <div className="searchListEmpty">
        Введите название фильм в поле для поиска чтобы показать список фильмов!
      </div>
    );
  } else {
    return (
      <div className="searchList">
        {searchList.map((item) => (
          <SearchCard key={item.filmId} film={item} />
        ))}
      </div>
    );
  }
};

export default SearchList;
