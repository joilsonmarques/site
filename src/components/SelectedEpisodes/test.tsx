import { render, screen } from '@testing-library/react'

import SelectedEpisodes from '.'

describe('<SelectedEpisodes />', () => {
  it('should render the heading', () => {
    const { container } = render(<SelectedEpisodes />)

    expect(
      screen.getByRole('heading', { name: /SelectedEpisodes/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
