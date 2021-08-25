import { render, screen } from '@testing-library/react'

import CallToAction from '.'

describe('<CallToAction />', () => {
  it('should render the heading', () => {
    const { container } = render(<CallToAction />)

    expect(
      screen.getByRole('heading', { name: /CallToAction/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
