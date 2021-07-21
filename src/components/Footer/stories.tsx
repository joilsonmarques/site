import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer
} as Meta

export const Default: Story = () => <Footer />

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'ancp-light'
  }
}
