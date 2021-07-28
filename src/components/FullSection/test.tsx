import { render, screen } from '@testing-library/react'

import FullSection from '.'

describe('<FullSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<FullSection />)

    expect(
      screen.getByRole('heading', { name: /FullSection/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
