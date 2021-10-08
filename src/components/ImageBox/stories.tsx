import { Story, Meta } from '@storybook/react/types-6-0'
import ImageBox, { ImageBoxProps } from '.'

import image from './mock'

export default {
  title: 'ImageBox',
  component: ImageBox,
  args: image
} as Meta

export const Default: Story<ImageBoxProps> = (args) => (
  <div style={{ width: '15rem', height: '15rem' }}>
    <ImageBox {...args} />
  </div>
)
