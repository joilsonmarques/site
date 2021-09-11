import { Story, Meta } from '@storybook/react/types-6-0'
import GenericPage from '.'

export default {
  title: 'Design System/Templates/Generic Page',
  component: GenericPage,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <GenericPage />
