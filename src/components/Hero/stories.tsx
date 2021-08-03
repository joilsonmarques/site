import { Story, Meta } from '@storybook/react/types-6-0'
import Hero from '.'

export default {
  title: 'Design System/Organisms/Hero',
  component: Hero
} as Meta

export const Default: Story = () => (
  <div>
    <Hero />
    <div
      style={{
        width: '100%',
        height: '4000px',
        position: 'relative',
        background:
          'linear-gradient(#29292B,#3A0332, #451379, #C61C4A, #F95E3C)'
      }}
    ></div>
  </div>
)

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'dark'
  }
}