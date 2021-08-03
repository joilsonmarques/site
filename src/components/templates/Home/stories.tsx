import { Story, Meta } from '@storybook/react/types-6-0'
import Home from '.'

export default {
  title: 'Design System/Templates/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <Home />
