import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Layout from './components/Layout/Layout';
import FilmList from './pages/FilmList/FilmList';
import SearchList from './pages/SearchList/SearchList';
import FilmDetails from './components/FilmDetails/FilmDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<FilmList />} />
          <Route path="/film-details/:id" element={<FilmDetails />} />
          <Route path="/searchList" element={<SearchList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
