import { render, screen } from '@testing-library/react'

import PodcastHeader from '.'

describe('<PodcastHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<PodcastHeader />)

    expect(
      screen.getByRole('heading', { name: /PodcastHeader/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
