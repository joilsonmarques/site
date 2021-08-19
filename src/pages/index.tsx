import Home, { HomeTemplateProps } from 'components/templates/Home'
// import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { initializeApollo } from 'utils/apollo'
// import { QUERY_HOME } from 'graphql/queries/home';
import episodes from 'components/SelectedEpisodes/mock'
import { gql } from '@apollo/client'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  // const TODAY = new Date().toISOString().slice(0, 10)
  const outerBarsColor = '29292B'
  const innerBarsColor = 'aab1bd'

  const { data /*: { featuredPodcast, selectedEpisodes }*/ } =
    // await apolloClient.query<QueryHome, QueryHomeVariables>({
    //   query: QUERY_HOME,
    //   variables: { date: TODAY },
    //   fetchPolicy: 'no-cache' // garantir sempre dado novo na geração do estático!
    // })
    await apolloClient.query({
      query: gql`
        query QueryHome {
          featuredPodcasts: home {
            Section {
              ... on ComponentSectionFeaturedPodcast {
                sectionTitle
                background {
                  url
                }
                description
                showLastEpisode
                podcast {
                  title
                  subtitle
                  cover {
                    url
                  }
                  description
                  slug
                  categories {
                    name
                    slug
                  }
                  episodes(limit: 1) {
                    embed
                  }
                }
              }
            }
          }
          selectedEpisodes: home {
            Section {
              ... on ComponentSectionSelectedEpisodes {
                sectionTitle
                episodes {
                  title
                  cover {
                    url
                  }
                  subTitle
                  embed
                }
              }
            }
          }
        }
      `
    })

  console.log('before featured: ', data.featuredPodcasts.Section)
  const regex = /(?<=src=").*?(?=[\\*"])/

  const featured = data.featuredPodcasts.Section.map((podFeat) => ({
    sectionTitle: podFeat.sectionTitle,
    background: `http://localhost:1337${podFeat.background?.url}`,
    description: podFeat.description,
    showLastEpisode: podFeat.showLastEpisode,
    podcast: {
      title: podFeat.podcast?.title,
      subtitle: podFeat.podcast?.subtitle,
      cover: `http://localhost:1337${podFeat.podcast?.cover?.url}`,
      description: podFeat.podcast?.description,
      slug: podFeat.podcast?.slug,
      categories: podFeat.podcast?.categories,
      lastEpisode: {
        embedUrl: podFeat.podcast?.episodes[0]?.embed
      }
    }
  }))

  console.log('featured after: ', featured[0])
  if (featured[0].showLastEpisode) {
    featured[0].podcast.lastEpisode.embedUrl = regex.exec(
      featured[0].podcast?.lastEpisode?.embedUrl
    )[0]
  } else {
    featured[0].podcast.lastEpisode.embedUrl = null
  }

  //const episodioss = data.selectedEpisodes
  return {
    props: {
      revalidate: 60,
      featuredPodcast: featured[0],
      episodes,
      outerBarsColor,
      innerBarsColor
    }
  }
}
