import { Story, Meta } from '@storybook/react/types-6-0'
import PodcastPage from '.'

export default {
  title: 'Design System/Templates/Podcast Page',
  component: PodcastPage,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <PodcastPage />
