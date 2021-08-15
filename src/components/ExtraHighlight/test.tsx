import { render, screen } from '@testing-library/react'

import ExtraHighlight from '.'

describe('<ExtraHighlight />', () => {
  it('should render the heading', () => {
    const { container } = render(<ExtraHighlight />)

    expect(
      screen.getByRole('heading', { name: /ExtraHighlight/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
