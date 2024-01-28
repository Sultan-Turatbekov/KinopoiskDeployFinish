import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from '../../components/StarRating/StarRating';
import { getFilmDetails } from '../../components/API-js-files/filmDetailsSlice';
import './FilmCardStyles.scss';

const FilmCard = ({ film }) => {
  const roundedRating = Math.round(film.rating / 2);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getFilm = useCallback(async () => {
    dispatch(getFilmDetails(film.filmId));
  }, [dispatch]);
  const toDetails = () => {
    getFilm();
    navigate(`film-details/${film.filmId}`);
  };

  return (
    <>
      <div onClick={toDetails} className="filmCard">
        <img
          height="100%"
          width="100%"
          src={film.posterUrlPreview}
          alt={film.nameRu}
        />
        <div className="onHover">
          <h1>{film.nameRu}</h1>
          <div className="genres">
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
          <StarRating rating={roundedRating} />
        </div>
      </div>
    </>
  );
};

export default FilmCard;
