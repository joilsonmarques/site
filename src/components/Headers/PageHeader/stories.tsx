import { Story, Meta } from '@storybook/react/types-6-0'
import PageHeader, { PageHeaderProps } from '.'

import mockPageHeaderProps from './mock'

export default {
  title: 'Design System/Molecules/Headers/Page Generic Header',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'ancp-dark'
    }
  },
  args: mockPageHeaderProps
} as Meta

export const Default: Story<PageHeaderProps> = (args) => (
  <PageHeader {...args} />
)
