/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryEpisode
// ====================================================

export interface QueryEpisode_episodes_podcast {
  __typename: "Podcasts";
  slug: string;
}

export interface QueryEpisode_episodes {
  __typename: "Episode";
  slug: string | null;
  podcast: QueryEpisode_episodes_podcast | null;
}

export interface QueryEpisode {
  episodes: QueryEpisode_episodes[];
}

export interface QueryEpisodeVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
