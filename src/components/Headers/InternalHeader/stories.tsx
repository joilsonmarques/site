import { Story, Meta } from '@storybook/react/types-6-0'
import InternalHeader, { InternalHeaderProps } from '.'

import mockInternalHeaderProps from './mock'

export default {
  title: 'Design System/Molecules/Headers/Internal Header',
  component: InternalHeader,
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'ancp-dark'
    }
  },
  args: mockInternalHeaderProps
} as Meta

export const Default: Story<InternalHeaderProps> = (args) => (
  <InternalHeader {...args} />
)
