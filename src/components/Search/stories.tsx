import { Story, Meta } from '@storybook/react/types-6-0'
import Search, { SearchProps } from '.'

export default {
  title: 'Design System/Organisms/Search',
  component: Search
} as Meta

export const Default: Story<SearchProps> = (args) => (
  <div>
    <Search {...args} />
  </div>
)
