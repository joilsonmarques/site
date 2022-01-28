/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FeaturedPodcastsFragment
// ====================================================

export interface FeaturedPodcastsFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionSelectedEpisodes" | "ComponentSectionExtra" | "ComponentSectionCallToAction";
}

export interface FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_background {
  __typename: "UploadFile";
  url: string;
}

export interface FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_podcast_cover {
  __typename: "UploadFile";
  url: string;
}

export interface FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_podcast_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_podcast_episodes {
  __typename: "Episode";
  embed: string | null;
}

export interface FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_podcast {
  __typename: "Podcasts";
  title: string;
  subtitle: string | null;
  cover: FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_podcast_cover | null;
  description: string | null;
  slug: string;
  categories: FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_podcast_categories[];
  episodes: FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_podcast_episodes[];
}

export interface FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast {
  __typename: "ComponentSectionFeaturedPodcast";
  sectionTitle: string | null;
  background: FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_background | null;
  description: string;
  showLastEpisode: boolean | null;
  podcast: FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast_podcast | null;
}

export type FeaturedPodcastsFragment_Section = FeaturedPodcastsFragment_Section_ComponentSiteIntro | FeaturedPodcastsFragment_Section_ComponentSectionFeaturedPodcast;

export interface FeaturedPodcastsFragment {
  __typename: "Home";
  Section: (FeaturedPodcastsFragment_Section | null)[];
}
