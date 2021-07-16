import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 2 logos and 2 column topics', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getAllByLabelText(/A Nossa casa de podcasts/i)).toHaveLength(
      2
    )

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /redes sociais/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /entre em contato/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
