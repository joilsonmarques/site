/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SelectedPodcastsFragment
// ====================================================

export interface SelectedPodcastsFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionFeaturedPodcast" | "ComponentSectionExtra" | "ComponentSectionCallToAction";
}

export interface SelectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes_cover {
  __typename: "UploadFile";
  url: string;
}

export interface SelectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes_podcast {
  __typename: "Podcasts";
  title: string;
  slug: string;
}

export interface SelectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes {
  __typename: "Episode";
  id: string;
  slug: string | null;
  title: string;
  cover: SelectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes_cover | null;
  subTitle: string | null;
  podcast: SelectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes_podcast | null;
  releaseDate: any;
}

export interface SelectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes {
  __typename: "ComponentSectionSelectedEpisodes";
  sectionTitle: string | null;
  episodes: SelectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes[];
}

export type SelectedPodcastsFragment_Section = SelectedPodcastsFragment_Section_ComponentSiteIntro | SelectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes;

export interface SelectedPodcastsFragment {
  __typename: "Home";
  Section: (SelectedPodcastsFragment_Section | null)[];
}
