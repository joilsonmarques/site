/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPodCastBySlug
// ====================================================

export interface QueryPodCastBySlug_podcasts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPodCastBySlug_podcasts_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface QueryPodCastBySlug_podcasts_episodes_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPodCastBySlug_podcasts_episodes_podcast {
  __typename: "Podcasts";
  title: string;
  slug: string;
}

export interface QueryPodCastBySlug_podcasts_episodes {
  __typename: "Episode";
  id: string;
  slug: string | null;
  title: string;
  episodeNumber: number;
  releaseDate: any;
  extraContent: string | null;
  cover: QueryPodCastBySlug_podcasts_episodes_cover | null;
  subTitle: string | null;
  podcast: QueryPodCastBySlug_podcasts_episodes_podcast | null;
}

export interface QueryPodCastBySlug_podcasts {
  __typename: "Podcasts";
  id: string;
  cover: QueryPodCastBySlug_podcasts_cover | null;
  title: string;
  subtitle: string | null;
  description: string | null;
  published_at: any | null;
  producer: string;
  categories: QueryPodCastBySlug_podcasts_categories[];
  slug: string;
  episodes: QueryPodCastBySlug_podcasts_episodes[];
}

export interface QueryPodCastBySlug_rodape_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryPodCastBySlug_rodape_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_generica: QueryPodCastBySlug_rodape_links_pagina_generica | null;
}

export interface QueryPodCastBySlug_rodape {
  __typename: "Rodape";
  links: (QueryPodCastBySlug_rodape_links | null)[] | null;
}

export interface QueryPodCastBySlug_barraLateral_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryPodCastBySlug_barraLateral_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_generica: QueryPodCastBySlug_barraLateral_menu_pagina_generica | null;
}

export interface QueryPodCastBySlug_barraLateral {
  __typename: "BarraLateral";
  menu: (QueryPodCastBySlug_barraLateral_menu | null)[] | null;
}

export interface QueryPodCastBySlug {
  podcasts: QueryPodCastBySlug_podcasts[];
  rodape: QueryPodCastBySlug_rodape | null;
  barraLateral: QueryPodCastBySlug_barraLateral | null;
}

export interface QueryPodCastBySlugVariables {
  slug: string;
}
