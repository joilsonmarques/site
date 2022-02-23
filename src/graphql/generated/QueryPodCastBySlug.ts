/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE, ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA } from "./globalTypes";

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

export interface QueryPodCastBySlug_menuFragment_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryPodCastBySlug_menuFragment_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QueryPodCastBySlug_menuFragment_menu_pagina_generica | null;
}

export interface QueryPodCastBySlug_menuFragment {
  __typename: "BarraLateral";
  menu: (QueryPodCastBySlug_menuFragment_menu | null)[] | null;
}

export interface QueryPodCastBySlug_rodapeFragment_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryPodCastBySlug_rodapeFragment_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: QueryPodCastBySlug_rodapeFragment_links_pagina_generica | null;
}

export interface QueryPodCastBySlug_rodapeFragment {
  __typename: "Rodape";
  links: (QueryPodCastBySlug_rodapeFragment_links | null)[] | null;
}

export interface QueryPodCastBySlug {
  podcasts: QueryPodCastBySlug_podcasts[];
  menuFragment: QueryPodCastBySlug_menuFragment | null;
  rodapeFragment: QueryPodCastBySlug_rodapeFragment | null;
}

export interface QueryPodCastBySlugVariables {
  slug: string;
}
