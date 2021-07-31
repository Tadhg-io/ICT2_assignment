import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateTvShowListPage';
import { getPopularTvShows } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import AddToListIcon from '../components/cardIcons/addToPlaylist';
import Spinner from '../components/spinner';

const PopularShowsPage = (props) => {
  
  const {  data, error, isLoading, isError }  = useQuery('popularShows', getPopularTvShows);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;


  // Redundant, but necessary to avoid app crashing.
  const favorites = [];
  localStorage.setItem('favorites', JSON.stringify(favorites));
  const addToFavorites = (movieId) => true;

  return (
    <PageTemplate
      title='Popular TV Shows'
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToListIcon movie={tvShow} />
      }}
    />
  );
};
export default PopularShowsPage;