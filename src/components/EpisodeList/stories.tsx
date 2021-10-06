import { Story, Meta } from '@storybook/react/types-6-0'
import EpisodeList, { EpisodeListProps } from '.'

import list from './mock'

export default {
  title: 'EpisodeList',
  component: EpisodeList,
  args: { list },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<EpisodeListProps[]> = (args) => (
  <EpisodeList items={list} {...args} />
)
