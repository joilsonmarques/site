import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-light'
    }
  }
} as Meta

export const Default: Story = () => <Footer />
