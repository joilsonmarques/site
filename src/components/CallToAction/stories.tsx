import { Story, Meta } from '@storybook/react/types-6-0'
import CallToAction, { CallToActionProps } from '.'

import mockCallToAction from './mock'

export default {
  title: 'Design System/Organisms/CallToAction',
  component: CallToAction,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  },
  args: mockCallToAction
} as Meta

export const Default: Story<CallToActionProps> = (args) => (
  <div>
    <CallToAction {...args} />
  </div>
)
