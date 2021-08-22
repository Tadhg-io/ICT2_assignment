import React from "react";
import EpisodeDetails from "../components/episodeDetails";
import { SampleEpisode } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Episode Details Page/Episode Details",
  component: EpisodeDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <EpisodeDetails episode={SampleEpisode} />;

Basic.storyName = "Default";
