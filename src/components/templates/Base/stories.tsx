import { Story, Meta } from '@storybook/react/types-6-0'
import Base, { BaseTemplateProps } from '.'

export default {
  title: 'Design System/Templates/Base',
  component: Base,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  }
} as Meta

export const Default: Story<BaseTemplateProps> = (args) => (
  <div>
    <Base {...args} />
  </div>
)
