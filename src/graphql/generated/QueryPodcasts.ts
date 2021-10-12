/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPodcasts
// ====================================================

export interface QueryPodcasts_podcasts {
  __typename: "Podcasts";
  slug: string;
  published_at: any | null;
  title: string;
  producer: string;
}

export interface QueryPodcasts {
  podcasts: QueryPodcasts_podcasts[];
}

export interface QueryPodcastsVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
