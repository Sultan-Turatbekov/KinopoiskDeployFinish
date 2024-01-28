import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilmDetails } from '../API-js-files/filmDetailsSlice';
import './FilmDetailsStyle.scss';

const FilmDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const currentFilm = useSelector((state) => state.filmDetails.currentFilm);
  const handleGoBack = () => {
    navigate(-1);
  };
  const getFilm = useCallback(
    async (id) => {
      dispatch(getFilmDetails(id));
    },
    [dispatch]
  );
  useEffect(() => {
    getFilm(params.id);
  }, [params.id, getFilm]);

  useEffect(() => {
    console.log(currentFilm);
  }, [currentFilm]);

  const blurredBackgroundStyles = {
    backgroundImage: `url(${currentFilm.posterUrl})`,
    position: 'absolute',
    filter: 'blur(4px)',
    top: 0,
    left: 0,
    zIndex: '-1',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: '140vh',
    width: '100%',
  };
  return (
    <>
      <div style={blurredBackgroundStyles}></div>
      <div className="filmDetailsContainer">
        <div className="filmDetails">
          <div onClick={handleGoBack} className="goBackBtn">
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="filmImg">
            <img src={currentFilm.posterUrlPreview} alt={currentFilm.nameRu} />
          </div>
          <div className="filmText">
            <h1 className="nameRu">{currentFilm.nameRu}</h1>
            <h3 className="nameOriginal">{currentFilm.nameOriginal}</h3>
            <ul className="genres">
              <h4>Жанры:</h4>
              {currentFilm.genres &&
                currentFilm.genres.map((item) => {
                  <li key={item.genre}>{item.genre}</li>;
                })}
            </ul>
            <ul className="countries">
              <h4>Страны:</h4>
              {currentFilm.countries &&
                currentFilm.countries.map((item) => {
                  <li key={item.country}>{item.country}</li>;
                })}
            </ul>
            <p className="year">Год выпуска: {currentFilm.year} год</p>
            <p className="filmLength">
              Длительность фильма: {currentFilm.filmLength} мин.
            </p>
            <p className="rating">
              рейтинг Кинопоиска: {currentFilm.ratingKinopoisk}, проголосовало:{' '}
              {currentFilm.ratingKinopoiskVoteCount} голосов
            </p>
            <p className="rating">
              рейтинг IMDb: {currentFilm.ratingImdb}, проголосовало:{' '}
              {currentFilm.ratingImdbVoteCount} голосов
            </p>

            <div className="toSeeBtn">
              <a href={currentFilm.webUrl}>Смотреть</a>
            </div>
          </div>
        </div>
        <div className="description">
          <h4>Описание:</h4>
          <p>{currentFilm.description}</p>
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
