import { Story, Meta } from '@storybook/react/types-6-0'
import EpisodeHeader, { EpisodeHeaderProps } from '.'

import mockEpisodeHeaderProps from './mock'

export default {
  title: 'Design System/Molecules/Episode Header',
  component: EpisodeHeader,
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'ancp-dark'
    }
  },
  args: mockEpisodeHeaderProps
} as Meta

export const Default: Story<EpisodeHeaderProps> = (args) => (
  <EpisodeHeader {...args} />
)
