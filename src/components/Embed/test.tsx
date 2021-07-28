import { render, screen } from '@testing-library/react'

import Embed from '.'

describe('<Embed />', () => {
  it('should render the heading', () => {
    const { container } = render(<Embed />)

    expect(screen.getByRole('heading', { name: /Embed/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
