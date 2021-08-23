import React from "react";
import { withRouter } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
import { getTvShow, getTvSeason } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import SeasonList from "../components/seasonList";
import EpisodeList from "../components/episodeList";
import Grid from "@material-ui/core/Grid";


const TvShowDetailsPage = (props) => {
  const { id, number } = props.match.params

  // get tvshow details
  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: id }],
    getTvShow
  );

  // get the season details
  const { data: season, seasonError, seasonisLoading, seasonIsError } = useQuery(
    ["season", { id, number }],
    getTvSeason
  );

  if (isLoading || seasonisLoading) {
    return <Spinner />;
  }

  if (isError || seasonIsError) {
    return <h1>{error.message}<br/>{seasonError.message}</h1>;
  }

    console.log('season', season);

  return (
    <>
      {tvShow ? ( // only render if a show was retrieved
        <>
          <PageTemplate tvShow={tvShow}>
            <TvShowDetails tvShow={tvShow} />
            <Grid container>
              <Grid item xs={12} sm={4}>
                <SeasonList numberOfSeasons={tvShow.number_of_seasons} />
              </Grid>
              <Grid item xs={12} sm={8}>
                { season && number?  // only render the episode list if a season was retrieved
                  ( 
                    <>
                    <h1>Season {number}</h1>
                    <EpisodeList episodes={season.episodes} tvShow={tvShow} />
                    </>
                  ) 
                  : 
                  <h1>Select a Season to view epipsode list</h1> 
                }
              </Grid>
            </Grid>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default withRouter(TvShowDetailsPage);