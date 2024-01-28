import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import './HeaderStyles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmsBySearch } from '../API-js-files/searchListSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search) {
      const result = dispatch(getFilmsBySearch(search));
      console.log('result: ', result);
      navigate('/searchList');
    } else {
      alert('Введите название фильма');
    }
  };
  const handleClear = () => {
    setSearch('');
  };

  return (
    <header>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/searchList"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Поиск фильмов
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            onChange={handleSearchChange}
            value={search}
            placeholder="поиск"
          />
          <span className="searchIcon">
            <FontAwesomeIcon
              color="grey"
              onClick={handleSubmit}
              icon={faMagnifyingGlass}
            />
          </span>
          <span className="deleteIcon">
            <FontAwesomeIcon
              color="grey"
              onClick={handleClear}
              icon={faXmark}
            />
          </span>
        </form>
      </div>
    </header>
  );
};

export default Header;
