import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateEpisodeDetailsPage";
import { getTvShow, getEpisode } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import Grid from "@material-ui/core/Grid";
import EpisodeDetails from "../components/episodeDetails";


const EpisodeDetailsPage = (props) => {
  const { id, number, episode } = props.match.params

  console.log("id, number, episode", [id, number, episode])

  // get tvshow details
  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: id }],
    getTvShow
  );

  // get the episode details
  const { data: ep, seasonError, seasonisLoading, seasonIsError } = useQuery(
    ["episode", { id, number, episode }],
    getEpisode
  );

  if (isLoading || seasonisLoading) {
    return <Spinner />;
  }

  if (isError || seasonIsError) {
    return <h1>{error.message}<br/>{seasonError.message}</h1>;
  }

  return (
    <>
      {tvShow && ep ? ( // only render if a show was retrieved
        <>
          <PageTemplate tvShow={tvShow} episode={ep}>
            <EpisodeDetails episode={ep} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default withRouter(EpisodeDetailsPage);