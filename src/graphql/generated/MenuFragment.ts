/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE, ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA } from "./globalTypes";

// ====================================================
// GraphQL fragment: MenuFragment
// ====================================================

export interface MenuFragment_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface MenuFragment_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  url: string | null;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: MenuFragment_menu_pagina_generica | null;
}

export interface MenuFragment {
  __typename: "BarraLateral";
  menu: (MenuFragment_menu | null)[] | null;
}
