import { Story, Meta } from '@storybook/react/types-6-0'
import AboutPage from '.'

export default {
  title: 'Design System/Templates/Internal Page',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <AboutPage />
