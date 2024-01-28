import React from 'react';
import FilmCard from '../FilmCard/FilmCard';
import './FilmListStyles.scss';
import { useSelector } from 'react-redux';

const FilmList = () => {
  const films = useSelector((state) => state.filmsList.list);
  const isLoading = useSelector((state) => state.filmsList.isLoading);
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="gridContainer">
        {films.map((item) => (
          <FilmCard film={item} key={item.filmId} />
        ))}
      </div>
    );
  }
};

export default FilmList;
