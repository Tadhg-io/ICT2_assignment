import React from "react";
import EpisodeList from "../components/episodeList";
import { SampleEpisode } from "./sampleData";
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
  const episodes = [
    { ...SampleEpisode, id: 1 },
    { ...SampleEpisode, id: 2 },
    { ...SampleEpisode, id: 3 },
    { ...SampleEpisode, id: 4 },
    { ...SampleEpisode, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <EpisodeList
        episodes={episodes}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
