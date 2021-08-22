import React from "react";
import MovieListHeader from "../components/headerMovieList";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Home Page/Header",
  component: MovieListHeader,
};

export const Basic = () => (
  <BrowserRouter>
    <MovieListHeader title={'Discover Movies'} />
  </BrowserRouter>
);

Basic.storyName = "Default";