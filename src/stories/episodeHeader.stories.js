import React from "react";
import EpisodeHeader from "../components/episodeHeader";
import { SampleEpisode, SampleTvShow } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Episode Details Page/Episode Header",
  component: EpisodeHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <EpisodeHeader episode={SampleEpisode} tvShow={SampleTvShow} />;

Basic.storyName = "Default";
