/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_siteInfroFragment_Section_ComponentSectionFeaturedPodcast {
  __typename: "ComponentSectionFeaturedPodcast" | "ComponentSectionSelectedEpisodes" | "ComponentSectionExtra" | "ComponentSectionCallToAction";
}

export interface QueryHome_siteInfroFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro";
  call: string;
  description: string | null;
  hasDetail: boolean;
  embed: string | null;
}

export type QueryHome_siteInfroFragment_Section = QueryHome_siteInfroFragment_Section_ComponentSiteIntro;

export interface QueryHome_siteInfroFragment {
  __typename: "Home";
  Section: (QueryHome_siteInfroFragment_Section | null)[];
}

export interface QueryHome_featuredPodcasts_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionSelectedEpisodes" | "ComponentSectionExtra" | "ComponentSectionCallToAction";
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_episodes {
  __typename: "Episode";
  embed: string;
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast {
  __typename: "Podcasts";
  title: string;
  subtitle: string | null;
  cover: QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_cover | null;
  description: string | null;
  slug: string;
  categories: QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_categories[];
  episodes: QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast_episodes[];
}

export interface QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast {
  __typename: "ComponentSectionFeaturedPodcast";
  sectionTitle: string | null;
  background: QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_background | null;
  description: string;
  showLastEpisode: boolean | null;
  podcast: QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast_podcast | null;
}

export type QueryHome_featuredPodcasts_Section = QueryHome_featuredPodcasts_Section_ComponentSectionFeaturedPodcast;

export interface QueryHome_featuredPodcasts {
  __typename: "Home";
  Section: (QueryHome_featuredPodcasts_Section | null)[];
}

export interface QueryHome_selectedPodcastsFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionFeaturedPodcast" | "ComponentSectionExtra" | "ComponentSectionCallToAction";
}

export interface QueryHome_selectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_selectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes_podcast {
  __typename: "Podcasts";
  title: string;
  slug: string;
}

export interface QueryHome_selectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes {
  __typename: "Episode";
  id: string;
  slug: string | null;
  title: string;
  cover: QueryHome_selectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes_cover | null;
  subTitle: string | null;
  podcast: QueryHome_selectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes_podcast | null;
  releaseDate: any;
}

export interface QueryHome_selectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes {
  __typename: "ComponentSectionSelectedEpisodes";
  sectionTitle: string | null;
  episodes: QueryHome_selectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes_episodes[];
}

export type QueryHome_selectedPodcastsFragment_Section = QueryHome_selectedPodcastsFragment_Section_ComponentSectionSelectedEpisodes;

export interface QueryHome_selectedPodcastsFragment {
  __typename: "Home";
  Section: (QueryHome_selectedPodcastsFragment_Section | null)[];
}

export interface QueryHome_extraHighLightFragment_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionFeaturedPodcast" | "ComponentSectionSelectedEpisodes" | "ComponentSectionCallToAction";
}

export interface QueryHome_extraHighLightFragment_Section_ComponentSectionExtra_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_extraHighLightFragment_Section_ComponentSectionExtra_link {
  __typename: "ComponentFragmentHyperlink";
  url: string;
  isExternal: boolean;
}

export interface QueryHome_extraHighLightFragment_Section_ComponentSectionExtra {
  __typename: "ComponentSectionExtra";
  cover: QueryHome_extraHighLightFragment_Section_ComponentSectionExtra_cover | null;
  title: string;
  subtitle: string | null;
  primaryInfo: string | null;
  secondaryInfo: string | null;
  embed: string;
  link: QueryHome_extraHighLightFragment_Section_ComponentSectionExtra_link | null;
}

export type QueryHome_extraHighLightFragment_Section = QueryHome_extraHighLightFragment_Section_ComponentSectionExtra;

export interface QueryHome_extraHighLightFragment {
  __typename: "Home";
  Section: (QueryHome_extraHighLightFragment_Section | null)[];
}

export interface QueryHome_callToAction_Section_ComponentSiteIntro {
  __typename: "ComponentSiteIntro" | "ComponentSectionFeaturedPodcast" | "ComponentSectionSelectedEpisodes" | "ComponentSectionExtra";
}

export interface QueryHome_callToAction_Section_ComponentSectionCallToAction_listLinks_paginas_interna {
  __typename: "Pages";
  Slug: string;
}

export interface QueryHome_callToAction_Section_ComponentSectionCallToAction_listLinks_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryHome_callToAction_Section_ComponentSectionCallToAction_listLinks {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  paginas_interna: QueryHome_callToAction_Section_ComponentSectionCallToAction_listLinks_paginas_interna | null;
  pagina_generica: QueryHome_callToAction_Section_ComponentSectionCallToAction_listLinks_pagina_generica | null;
}

export interface QueryHome_callToAction_Section_ComponentSectionCallToAction {
  __typename: "ComponentSectionCallToAction";
  title: string;
  listLinks: (QueryHome_callToAction_Section_ComponentSectionCallToAction_listLinks | null)[] | null;
}

export type QueryHome_callToAction_Section = QueryHome_callToAction_Section_ComponentSectionCallToAction;

export interface QueryHome_callToAction {
  __typename: "Home";
  Section: (QueryHome_callToAction_Section | null)[];
}

export interface QueryHome_rodape_links_paginas_interna {
  __typename: "Pages";
  Slug: string;
}

export interface QueryHome_rodape_links_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryHome_rodape_links {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  paginas_interna: QueryHome_rodape_links_paginas_interna | null;
  pagina_generica: QueryHome_rodape_links_pagina_generica | null;
}

export interface QueryHome_rodape {
  __typename: "Rodape";
  links: (QueryHome_rodape_links | null)[] | null;
}

export interface QueryHome_barraLateral_menu_paginas_interna {
  __typename: "Pages";
  Slug: string;
}

export interface QueryHome_barraLateral_menu_pagina_generica {
  __typename: "Posts";
  slug: string;
}

export interface QueryHome_barraLateral_menu {
  __typename: "ComponentFragmentListaDeLinks";
  label: string;
  url: string | null;
  type: ENUM_COMPONENTFRAGMENTLISTADELINKS_TYPE;
  paginas_interna: QueryHome_barraLateral_menu_paginas_interna | null;
  pagina_generica: QueryHome_barraLateral_menu_pagina_generica | null;
}

export interface QueryHome_barraLateral {
  __typename: "BarraLateral";
  menu: (QueryHome_barraLateral_menu | null)[] | null;
}

export interface QueryHome {
  siteInfroFragment: QueryHome_siteInfroFragment | null;
  featuredPodcasts: QueryHome_featuredPodcasts | null;
  selectedPodcastsFragment: QueryHome_selectedPodcastsFragment | null;
  extraHighLightFragment: QueryHome_extraHighLightFragment | null;
  callToAction: QueryHome_callToAction | null;
  rodape: QueryHome_rodape | null;
  barraLateral: QueryHome_barraLateral | null;
}
