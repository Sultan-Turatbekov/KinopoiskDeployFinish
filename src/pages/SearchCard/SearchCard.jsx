import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from '../../components/StarRating/StarRating';
import './SearchCardStyles.scss';
import { useDispatch } from 'react-redux';
import { getFilmDetails } from '../../components/API-js-files/filmDetailsSlice';
const SearchCard = ({ film }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toDetails = (e) => {
    navigate(`/film-details/${film.filmId}`);
  };
  const roundedRating = Math.round(film.rating / 2);
  return (
    <>
      <div className="searchFilmCard" onClick={(event) => toDetails(event)}>
        <div className="CardImg">
          <img
            height="100%"
            width="100%"
            src={film.posterUrlPreview}
            alt={film.nameRu}
          />
        </div>
        <div className="seacrhFilmText">
          <h1>
            {film.nameRu !== undefined ? film.nameRu : 'Название отсутствует'}
          </h1>
          <div className="seacrhGenres">
            {film.genres.map((item) => (
              <span key={item.genre}>{item.genre}</span>
            ))}
          </div>
          <h5>{film.year}</h5>
          <h5>
            {film.countries.map((item, index) => (
              <p key={index}>{item.country}</p>
            ))}
          </h5>
          <div className="seacrhRating">
            <StarRating rating={roundedRating} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
