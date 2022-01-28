import { Story, Meta } from '@storybook/react/types-6-0'
import MemberList, { MemberListProps } from '.'

import list from './mock'

export default {
  title: 'Design System/Organism/MemberList',
  component: MemberList,
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'ancp-dark'
    }
  }
} as Meta

export const Default: Story<MemberListProps[]> = () => (
  <MemberList members={list} />
)
