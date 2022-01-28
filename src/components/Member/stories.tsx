import { Story, Meta } from '@storybook/react/types-6-0'
import Member, { MemberProps } from '.'

import member from './mock'

export default {
  title: 'Design System/Molecules/Member',
  component: Member,
  args: member,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-dark'
    }
  }
} as Meta

export const Default: Story<MemberProps> = (args) => <Member {...args} />
