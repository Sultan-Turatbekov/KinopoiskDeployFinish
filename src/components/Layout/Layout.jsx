import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { getFilms } from '../API-js-files/filmListSlice';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
