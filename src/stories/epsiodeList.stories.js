import React from "react";
import EpisodeList from "../components/episodeList";
import { SampleTvShow, SampleSeason } from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/EpisodeList",
  component: EpisodeList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const episodes = SampleSeason.episodes;
  return (
    <Grid container spacing={5}>
      <EpisodeList
        episodes={episodes}
        tvShow={SampleTvShow}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
