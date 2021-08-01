import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from 'components/MediaMatch'
import EpisodeCard, { EpisodeCardProps } from '.'

export default {
  title: 'Design System/Molecules/EpisodeCard',
  component: EpisodeCard,
  parameters: {
    backgrounds: {
      default: 'ancp-dark'
    }
  },
  args: {
    slug: '50-anos-de-elis-regina',
    title:
      'Horinha #39 - A melhor vida que seu dinheiro pode proporciona, com Fred Marques',
    podcast: 'Horinha sobre grana',
    img: 'https://source.unsplash.com/user/willianjusten/280x280'
  },
  argTypes: {
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<EpisodeCardProps> = (args) => (
  <div>
    <MediaMatch lessThan="medium">
      <div style={{ width: '15rem', height: '15rem', margin: '5rem' }}>
        <EpisodeCard {...args} />
      </div>
    </MediaMatch>
    <MediaMatch greaterThan="medium">
      <div style={{ width: '28rem', height: '28rem', margin: '15rem' }}>
        <EpisodeCard {...args} />
      </div>
    </MediaMatch>
  </div>
)
