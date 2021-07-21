import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Design System/Molecules/Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'ancp-dark'
  }
}
