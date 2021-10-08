import { Story, Meta } from '@storybook/react/types-6-0'
import PodcastHeader, { PodcastHeaderProps } from '.'

import mockPodcastHeaderProps from './mock'

export default {
  title: 'Design System/Molecules/PodcastHeader',
  component: PodcastHeader,
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'ancp-dark'
    }
  },
  args: mockPodcastHeaderProps
} as Meta

export const Default: Story<PodcastHeaderProps> = (args) => (
  <PodcastHeader {...args} />
)
