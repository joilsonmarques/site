import { Story, Meta } from '@storybook/react/types-6-0'
import InternalPage from '.'

export default {
  title: 'Design System/Templates/Internal Page',
  component: InternalPage,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <InternalPage />
