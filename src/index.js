import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularShowsPage from './pages/popularShowsPage';
import TvShowPage from './pages/tvShowDetailsPage';
import EpisodePage from './pages/episodeDetailsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/shows/popular" component={PopularShowsPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route path="/shows/:id/:number/:episode" component={EpisodePage} />
              <Route path="/shows/:id/:number" component={TvShowPage} />
              <Route path="/shows/:id" component={TvShowPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));