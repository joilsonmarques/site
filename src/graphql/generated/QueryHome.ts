/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_featuredPodcasts_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionSelectedEpisodes" | "ComponentSectionExtra" | "ComponentSectionCallToAction";
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_episodes {
  __typename: "Episode";
  embed: string;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast {
  __typename: "Podcasts";
  title: string;
  subtitle: string | null;
  cover: QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_cover | null;
  description: string | null;
  slug: string;
  categories: (QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_categories | null)[] | null;
  episodes: (QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_episodes | null)[] | null;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast {
  __typename: "ComponentSectionFeaturedPodcast";
  sectionTitle: string | null;
  background: QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_background | null;
  description: string;
  showLastEpisode: boolean | null;
  podcast: QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast | null;
}

export type QueryHome_featuredPodcasts_Section = QueryHome_featuredPodcasts_Section_ComponentSiteIntro | QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast;

export interface QueryHome_featuredPodcasts {
  __typename: "Home";
  Section: (QueryHome_featuredPodcasts_Section | null)[];
}

export interface QueryHome {
  featuredPodcasts: QueryHome_featuredPodcasts | null;
}
