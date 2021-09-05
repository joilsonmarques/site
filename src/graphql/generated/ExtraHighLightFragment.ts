/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ExtraHighLightFragment
// ====================================================

export interface ExtraHighLightFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionFeaturedPodcast" | "ComponentSectionSelectedEpisodes" | "ComponentSectionCallToAction";
}

export interface ExtraHighLightFragment_Section_ComponentSectionExtra_cover {
  __typename: "UploadFile";
  url: string;
}

export interface ExtraHighLightFragment_Section_ComponentSectionExtra_link {
  __typename: "ComponentFragmentHyperlink";
  url: string;
  isExternal: boolean;
}

export interface ExtraHighLightFragment_Section_ComponentSectionExtra {
  __typename: "ComponentSectionExtra";
  cover: ExtraHighLightFragment_Section_ComponentSectionExtra_cover | null;
  title: string;
  subtitle: string | null;
  primaryInfo: string | null;
  secondaryInfo: string | null;
  embed: string;
  link: ExtraHighLightFragment_Section_ComponentSectionExtra_link | null;
}

export type ExtraHighLightFragment_Section = ExtraHighLightFragment_Section_ComponentSiteIntro | ExtraHighLightFragment_Section_ComponentSectionExtra;

export interface ExtraHighLightFragment {
  __typename: "Home";
  Section: (ExtraHighLightFragment_Section | null)[];
}
