import { render, screen } from '@testing-library/react'

import EpisodePage from '.'

describe('<EpisodePage />', () => {
  it('should render the heading', () => {
    const { container } = render(<EpisodePage />)

    expect(
      screen.getByRole('heading', { name: /EpisodePage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
