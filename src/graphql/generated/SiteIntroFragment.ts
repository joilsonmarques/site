/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SiteIntroFragment
// ====================================================

export interface SiteIntroFragment_Section_ComponentSectionFeaturedPodcast {
  __typename: "ComponentSectionFeaturedPodcast" | "ComponentSectionSelectedEpisodes" | "ComponentSectionExtra" | "ComponentSectionCallToAction";
}

export interface SiteIntroFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro";
  call: string;
  description: string | null;
  hasDetail: boolean;
  embed: string | null;
}

export type SiteIntroFragment_Section = SiteIntroFragment_Section_ComponentSectionFeaturedPodcast | SiteIntroFragment_Section_ComponentSiteIntro;

export interface SiteIntroFragment {
  __typename: "Home";
  Section: (SiteIntroFragment_Section | null)[];
}
