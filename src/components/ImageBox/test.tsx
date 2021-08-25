import { render, screen } from '@testing-library/react'

import ImageBox from '.'

describe('<ImageBox />', () => {
  it('should render the heading', () => {
    const { container } = render(<ImageBox />)

    expect(
      screen.getByRole('heading', { name: /ImageBox/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
