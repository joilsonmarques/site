/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE, ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA } from "./globalTypes";

// ====================================================
// GraphQL fragment: CallToActionFragment
// ====================================================

export interface CallToActionFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionFeaturedPodcast" | "ComponentSectionSelectedEpisodes" | "ComponentSectionExtra";
}

export interface CallToActionFragment_Section_ComponentSectionCallToAction_listLinks_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface CallToActionFragment_Section_ComponentSectionCallToAction_listLinks {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  pagina_interna: ENUM_COMPONENTFRAGMENTLISTADELINKS_PAGINA_INTERNA | null;
  pagina_generica: CallToActionFragment_Section_ComponentSectionCallToAction_listLinks_pagina_generica | null;
}

export interface CallToActionFragment_Section_ComponentSectionCallToAction {
  __typename: "ComponentSectionCallToAction";
  title: string;
  listLinks: (CallToActionFragment_Section_ComponentSectionCallToAction_listLinks | null)[] | null;
}

export type CallToActionFragment_Section = CallToActionFragment_Section_ComponentSiteIntro | CallToActionFragment_Section_ComponentSectionCallToAction;

export interface CallToActionFragment {
  __typename: "Home";
  Section: (CallToActionFragment_Section | null)[];
}
