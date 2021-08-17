import { Story, Meta } from '@storybook/react/types-6-0'
import ExtraHighlight, { ExtraHighlightProps } from '.'

import mockExtraHighlight from './mock'

export default {
  title: 'ExtraHighlight',
  component: ExtraHighlight,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  },
  args: mockExtraHighlight
} as Meta

export const Default: Story<ExtraHighlightProps> = (args) => (
  <div>
    <ExtraHighlight {...args} />
  </div>
)
