import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'
import MediaMatch from 'components/MediaMatch'

export default {
  title: 'Design System/Atoms/Ribbon',
  component: Ribbon,
  args: {
    children: 'Episódio novo',
    color: 'red',
    textColor: 'white'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div>
    <MediaMatch lessThan="medium">
      <div
        style={{
          width: '15rem',
          height: '15rem',
          margin: '15rem',
          position: 'relative',
          backgroundColor: '#888'
        }}
      >
        <Ribbon {...args} />
      </div>
    </MediaMatch>
    <MediaMatch greaterThan="medium">
      <div
        style={{
          width: '28.8rem',
          height: '28.8rem',
          margin: '15rem',
          position: 'relative',
          backgroundColor: '#888'
        }}
      >
        <Ribbon {...args} />
      </div>
    </MediaMatch>
  </div>
)

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'ancp-dark'
  }
}
