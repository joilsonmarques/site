/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPostBySlug
// ====================================================

export interface QueryPostBySlug_posts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPostBySlug_posts_author {
  __typename: "Author";
  name: string;
}

export interface QueryPostBySlug_posts_categorias {
  __typename: "Category";
  slug: string;
  name: string;
}

export interface QueryPostBySlug_posts_tags {
  __typename: "ComponentFragmentTags";
  name: string;
}

export interface QueryPostBySlug_posts {
  __typename: "Posts";
  cover: QueryPostBySlug_posts_cover | null;
  title: string;
  summary: string;
  content: string | null;
  published_at: any | null;
  author: QueryPostBySlug_posts_author | null;
  categorias: QueryPostBySlug_posts_categorias[];
  tags: (QueryPostBySlug_posts_tags | null)[] | null;
}

export interface QueryPostBySlug_rodape_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryPostBySlug_rodape_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_generica: QueryPostBySlug_rodape_links_pagina_generica | null;
}

export interface QueryPostBySlug_rodape {
  __typename: "Rodape";
  links: (QueryPostBySlug_rodape_links | null)[] | null;
}

export interface QueryPostBySlug_barraLateral_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryPostBySlug_barraLateral_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_generica: QueryPostBySlug_barraLateral_menu_pagina_generica | null;
}

export interface QueryPostBySlug_barraLateral {
  __typename: "BarraLateral";
  menu: (QueryPostBySlug_barraLateral_menu | null)[] | null;
}

export interface QueryPostBySlug {
  posts: QueryPostBySlug_posts[];
  rodape: QueryPostBySlug_rodape | null;
  barraLateral: QueryPostBySlug_barraLateral | null;
}

export interface QueryPostBySlugVariables {
  slug: string;
}
