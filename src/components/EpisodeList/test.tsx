import { render, screen } from '@testing-library/react'

import EpisodeList from '.'

describe('<EpisodeList />', () => {
  it('should render the heading', () => {
    const { container } = render(<EpisodeList />)

    expect(
      screen.getByRole('heading', { name: /EpisodeList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
