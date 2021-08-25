import { Story, Meta } from '@storybook/react/types-6-0'
import Hero, { HeroProps } from '.'

import mockHero from './mock'

export default {
  title: 'Design System/Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  },
  args: mockHero
} as Meta

export const Default: Story<HeroProps> = (args) => (
  <div>
    <Hero {...args} />
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
