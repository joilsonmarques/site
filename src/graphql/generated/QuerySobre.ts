/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLINKS_NETWORK, ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QuerySobre
// ====================================================

export interface QuerySobre_sobre_Members_avatar {
  __typename: "UploadFile";
  url: string;
}

export interface QuerySobre_sobre_Members_links {
  __typename: "ComponentFragmentLinks";
  network: ENUM_COMPONENTFRAGMENTLINKS_NETWORK | null;
  url: string;
}

export interface QuerySobre_sobre_Members {
  __typename: "ComponentFragmentIntegrante";
  id: string;
  name: string;
  avatar: QuerySobre_sobre_Members_avatar | null;
  bio: string;
  links: (QuerySobre_sobre_Members_links | null)[] | null;
}

export interface QuerySobre_sobre {
  __typename: "Sobre";
  Title: string;
  Embed: string | null;
  Summary: string;
  Members: (QuerySobre_sobre_Members | null)[] | null;
}

export interface QuerySobre_rodape_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QuerySobre_rodape_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_generica: QuerySobre_rodape_links_pagina_generica | null;
}

export interface QuerySobre_rodape {
  __typename: "Rodape";
  links: (QuerySobre_rodape_links | null)[] | null;
}

export interface QuerySobre_barraLateral_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QuerySobre_barraLateral_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_generica: QuerySobre_barraLateral_menu_pagina_generica | null;
}

export interface QuerySobre_barraLateral {
  __typename: "BarraLateral";
  menu: (QuerySobre_barraLateral_menu | null)[] | null;
}

export interface QuerySobre {
  sobre: QuerySobre_sobre | null;
  rodape: QuerySobre_rodape | null;
  barraLateral: QuerySobre_barraLateral | null;
}
