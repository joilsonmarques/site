import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

import mockMenuLinksProps from './mock'

export default {
  title: 'Design System/Molecules/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'ancp-dark'
    }
  },
  args: mockMenuLinksProps
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div
    style={{
      position: 'relative',
      height: '3000px',
      background: 'linear-gradient(#29292B,#3A0332, #451379, #C61C4A, #F95E3C)',
      margin: '0',
      padding: '0'
    }}
  >
    <Menu {...args} />
  </div>
)
