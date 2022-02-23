/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE, ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA } from "./globalTypes";

// ====================================================
// GraphQL fragment: RodapeFragment
// ====================================================

export interface RodapeFragment_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface RodapeFragment_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: RodapeFragment_links_pagina_generica | null;
}

export interface RodapeFragment {
  __typename: "Rodape";
  links: (RodapeFragment_links | null)[] | null;
}
