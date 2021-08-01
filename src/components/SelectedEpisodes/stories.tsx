import { Story, Meta } from '@storybook/react/types-6-0'
import { EpisodeCardProps } from 'components/EpisodeCard'
import SelectedEpisodes from '.'

import items from './mock'

export default {
  title: 'Design System/Organisms/SelectedEpisodes',
  component: SelectedEpisodes,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  }
} as Meta

export const Default: Story<EpisodeCardProps[]> = (args) => (
  <div>
    <SelectedEpisodes items={args} {...args} />
  </div>
)
