/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryEpisodeBySlug
// ====================================================

export interface QueryEpisodeBySlug_episodes_authors {
  __typename: "Author";
  name: string;
}

export interface QueryEpisodeBySlug_episodes_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface QueryEpisodeBySlug_episodes {
  __typename: "Episode";
  title: string;
  authors: QueryEpisodeBySlug_episodes_authors[];
  episodeNumber: number;
  embed: string | null;
  releaseDate: any;
  extraContent: string | null;
  categories: QueryEpisodeBySlug_episodes_categories[];
}

export interface QueryEpisodeBySlug_rodape_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryEpisodeBySlug_rodape_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_generica: QueryEpisodeBySlug_rodape_links_pagina_generica | null;
}

export interface QueryEpisodeBySlug_rodape {
  __typename: "Rodape";
  links: (QueryEpisodeBySlug_rodape_links | null)[] | null;
}

export interface QueryEpisodeBySlug_barraLateral_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryEpisodeBySlug_barraLateral_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_generica: QueryEpisodeBySlug_barraLateral_menu_pagina_generica | null;
}

export interface QueryEpisodeBySlug_barraLateral {
  __typename: "BarraLateral";
  menu: (QueryEpisodeBySlug_barraLateral_menu | null)[] | null;
}

export interface QueryEpisodeBySlug {
  episodes: QueryEpisodeBySlug_episodes[];
  rodape: QueryEpisodeBySlug_rodape | null;
  barraLateral: QueryEpisodeBySlug_barraLateral | null;
}

export interface QueryEpisodeBySlugVariables {
  slug: string;
}
