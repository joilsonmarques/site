import { Story, Meta } from '@storybook/react/types-6-0'
import Icon, { IconProps } from '.'

export default {
  title: 'Design System/Molecules/Icon',
  component: Icon,
  args: {
    name: 'Instagram',
    size: '50'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<IconProps> = (args) => <Icon {...args} />
