import { Story, Meta } from '@storybook/react/types-6-0'
import Search from '.'

export default {
  title: 'Design System/Organisms/Search',
  component: Search
} as Meta

export const Default: Story = () => <Search />

Default.parameters = {
  layout: 'fullscreen'
}
