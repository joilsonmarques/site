import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Design System/Molecules/Menu',
  component: Menu
} as Meta

export const Default: Story = () => (
  <div
    style={{
      position: 'relative',
      height: '3000px',
      background: 'linear-gradient(#29292B,#3A0332, #451379, #C61C4A, #F95E3C)',
      margin: '0',
      padding: '0'
    }}
  >
    <Menu />
  </div>
)

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'dark'
  }
}
