/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE, ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryEpisodeBySlug
// ====================================================

export interface QueryEpisodeBySlug_episodes_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface QueryEpisodeBySlug_episodes {
  __typename: "Episode";
  title: string;
  episodeNumber: number;
  embed: string | null;
  releaseDate: any;
  extraContent: string | null;
  categories: QueryEpisodeBySlug_episodes_categories[];
}

export interface QueryEpisodeBySlug_menuFragment_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryEpisodeBySlug_menuFragment_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QueryEpisodeBySlug_menuFragment_menu_pagina_generica | null;
}

export interface QueryEpisodeBySlug_menuFragment {
  __typename: "BarraLateral";
  menu: (QueryEpisodeBySlug_menuFragment_menu | null)[] | null;
}

export interface QueryEpisodeBySlug_rodapeFragment_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryEpisodeBySlug_rodapeFragment_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QueryEpisodeBySlug_rodapeFragment_links_pagina_generica | null;
}

export interface QueryEpisodeBySlug_rodapeFragment {
  __typename: "Rodape";
  links: (QueryEpisodeBySlug_rodapeFragment_links | null)[] | null;
}

export interface QueryEpisodeBySlug {
  episodes: QueryEpisodeBySlug_episodes[];
  menuFragment: QueryEpisodeBySlug_menuFragment | null;
  rodapeFragment: QueryEpisodeBySlug_rodapeFragment | null;
}

export interface QueryEpisodeBySlugVariables {
  slug: string;
}
