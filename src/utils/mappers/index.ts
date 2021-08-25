import { QueryHome_featuredPodcasts_Section } from 'graphql/generated/QueryHome'
import { getPublicUrl } from 'utils/getPublicUrl'

export const featuredPodcastMapper = (
  featuredPodcast: (QueryHome_featuredPodcasts_Section | null)[] | undefined
) => {
  const regex = /(?<=src=").*?(?=[\\*"])/

  return featuredPodcast
    ? featuredPodcast.map((podFeat) => ({
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
