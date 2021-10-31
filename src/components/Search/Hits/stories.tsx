import { Story, Meta } from '@storybook/react/types-6-0'
import HitList, { HitsListProps } from '.'

import list from './mock'

export default {
  title: 'Design System/Organisms/Search/Hits',
  component: HitList,
  args: { list },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  }
} as Meta

export const Default: Story<HitsListProps[]> = (args) => (
  <HitList items={list} {...args} />
)
