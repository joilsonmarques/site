/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CallToActionFragment
// ====================================================

export interface CallToActionFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionFeaturedPodcast" | "ComponentSectionSelectedEpisodes" | "ComponentSectionExtra";
}

export interface CallToActionFragment_Section_ComponentSectionCallToAction_listLinks {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string;
  isExternal: boolean;
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
