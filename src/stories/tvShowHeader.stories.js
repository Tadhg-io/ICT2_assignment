import React from "react";
import TvShowHeader from "../components/tvShowHeader";
import { SampleTvShow } from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "TvShow Details Page/TvShowHeader",
  component: TvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvShowHeader tvShow={SampleTvShow} />;

Basic.storyName = "Default";
