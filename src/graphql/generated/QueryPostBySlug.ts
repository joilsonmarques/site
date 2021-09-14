/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPostBySlug
// ====================================================

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
  id: string;
  slug: string;
  published_at: any | null;
  title: string;
  author: QueryPostBySlug_posts_author | null;
  categorias: QueryPostBySlug_posts_categorias[];
  tags: (QueryPostBySlug_posts_tags | null)[] | null;
}

export interface QueryPostBySlug_rodape_links_paginas_interna {
  __typename: "Pages";
  Slug: string;
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
  paginas_interna: QueryPostBySlug_rodape_links_paginas_interna | null;
  pagina_generica: QueryPostBySlug_rodape_links_pagina_generica | null;
}

export interface QueryPostBySlug_rodape {
  __typename: "Rodape";
  links: (QueryPostBySlug_rodape_links | null)[] | null;
}

export interface QueryPostBySlug_barraLateral_menu_paginas_interna {
  __typename: "Pages";
  Slug: string;
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
  paginas_interna: QueryPostBySlug_barraLateral_menu_paginas_interna | null;
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
