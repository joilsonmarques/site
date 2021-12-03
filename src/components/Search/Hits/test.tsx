import { render, screen } from '@testing-library/react'

import Hits from '.'

describe('<Hits />', () => {
  it('should render the heading', () => {
    const { container } = render(<Hits />)

    expect(screen.getByRole('heading', { name: /Hits/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
