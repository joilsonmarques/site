import { Story, Meta } from '@storybook/react/types-6-0'
import Embed, { EmbedProps } from '.'
import mockEmbed from './mock'

export default {
  title: 'Design System/Atoms/Embed',
  component: Embed,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  },
  args: mockEmbed
} as Meta

export const Default: Story<EmbedProps> = (args) => (
  <div>
    <Embed {...args} />
  </div>
)
