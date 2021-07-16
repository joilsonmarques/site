import { Story, Meta } from '@storybook/react/types-6-0'
import FeaturedPodcast, { FeaturedPodcastProps } from '.'
import mockFeaturedPodcast from './mock'

export default {
  title: 'FeaturedPodcast',
  component: FeaturedPodcast,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  },
  args: mockFeaturedPodcast
} as Meta

export const Default: Story<FeaturedPodcastProps> = (args) => (
  <div>
    <FeaturedPodcast {...args} />
  </div>
)
