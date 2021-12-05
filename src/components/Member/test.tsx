import { render, screen } from '@testing-library/react'

import Member from '.'

describe('<Member />', () => {
  it('should render the heading', () => {
    const { container } = render(<Member />)

    expect(screen.getByRole('heading', { name: /Member/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
