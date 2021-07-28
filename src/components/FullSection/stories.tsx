import { Story, Meta } from '@storybook/react/types-6-0'
import FullSection, { FullSectionProps } from '.'

export default {
  title: 'Design System/Atoms/FullSection',
  component: FullSection,
  argTypes: {
    color: {
      control: { type: 'select' }
    }
  }
} as Meta

export const Default: Story<FullSectionProps> = (args) => (
  <FullSection {...args} />
)

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'dark'
  }
}
