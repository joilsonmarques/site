import {
  QueryHome_callToAction_Section,
  QueryHome_extraHighLightFragment_Section,
  QueryHome_featuredPodcasts_Section,
  QueryHome_selectedPodcastsFragment_Section,
  QueryHome_siteInfroFragment_Section
} from 'graphql/generated/QueryHome'
import { getPublicUrl, exibirNovoEpisodio } from 'utils/getPublicUrl'

export const featuredPodcastMapper = (
  featuredPodcast: (QueryHome_featuredPodcasts_Section | null)[] | undefined
) => {
  const regex = /(?<=src=").*?(?=[\\*"])/
  return featuredPodcast
    ? featuredPodcast
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSectionFeaturedPodcast') {
            return obj
          }
        })
        .map((podFeat) => ({
          sectionTitle: podFeat?.sectionTitle,
          background: `${getPublicUrl(podFeat?.background?.url)}`,
          description: podFeat?.description,
          showLastEpisode: podFeat?.showLastEpisode,
          podcast: {
            title: podFeat?.podcast?.title,
            subtitle: podFeat?.podcast?.subtitle,
            cover: `${getPublicUrl(podFeat?.podcast?.cover?.url)}`,
            description: podFeat?.podcast?.description,
            slug: podFeat?.podcast?.slug,
            categories: podFeat?.podcast?.categories,
            lastEpisode: {
              embedUrl: podFeat?.showLastEpisode
                ? regex.exec(podFeat?.podcast?.episodes[0]?.embed || '')
                : null
            }
          }
        }))[0]
    : {}
}

export const selectedPodcastMapper = (
  selectedPodcast:
    | (QueryHome_selectedPodcastsFragment_Section | null)[]
    | undefined
) => {
  return selectedPodcast
    ? selectedPodcast
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSectionSelectedEpisodes') {
            return obj
          }
        })[0]
        ?.episodes.map((podSelect) => ({
          id: podSelect?.id,
          slug: podSelect?.slug,
          title: podSelect?.title,
          img: `${getPublicUrl(podSelect?.cover?.url)}`,
          podcast: podSelect?.podcast?.title,
          ribbon: `${exibirNovoEpisodio(podSelect?.releaseDate)}`
        }))
    : {}
}

export const siteIntroMapper = (
  siteIntro: (QueryHome_siteInfroFragment_Section | null)[] | undefined
) => {
  const regex = /(?<=src=").*?(?=[\\*"])/
  return siteIntro
    ? siteIntro
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSiteIntro') {
            return obj
          }
        })
        .map((intro) => ({
          call: intro?.call,
          description: intro?.description,
          hasDetail: intro?.hasDetail,
          embed: regex.exec(intro?.embed || '')
        }))[0]
    : {}
}

export const extraHighLightMapper = (
  extraHighlight:
    | (QueryHome_extraHighLightFragment_Section | null)[]
    | undefined
) => {
  const regex = /(?<=src=").*?(?=[\\*"])/
  return extraHighlight
    ? extraHighlight
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSectionExtra') {
            return obj
          }
        })
        ?.map((extra) => ({
          cover: `${getPublicUrl(extra?.cover?.url)}`,
          title: extra?.title,
          subtitle: extra?.subtitle,
          primaryInfo: extra?.primaryInfo,
          secondaryInfo: extra?.secondaryInfo,
          embedUrl: regex.exec(extra?.embed || ''),
          link: extra?.link
        }))[0]
    : {}
}

export const callToActionMapper = (
  callToAction: (QueryHome_callToAction_Section | null)[] | undefined
) => {
  return callToAction
    ? callToAction
        .filter((obj) => {
          if (obj?.__typename === 'ComponentSectionCallToAction') {
            return obj
          }
        })
        .map((call) => ({
          title: call?.title,
          listLinks: call?.listLinks
        }))[0]
    : {}
}
