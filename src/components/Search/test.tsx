import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Search from '.'

describe('<Search />', () => {
  it('should render the search', () => {
    const { container } = renderWithTheme(<Search />)

    expect(screen.getByLabelText('search')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
