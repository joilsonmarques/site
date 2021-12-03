import { Story, Meta } from '@storybook/react/types-6-0'
import EpisodePage from '.'

export default {
  title: 'Design System/Templates/Episode Page',
  component: EpisodePage,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <EpisodePage />
