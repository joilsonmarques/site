import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/A Nossa casa de podcasts/i).parentElement
    ).toHaveStyle({ color: '#FFFFFF' })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(
      screen.getByLabelText(/A Nossa casa de podcasts/i).parentElement
    ).toHaveStyle({ color: '#000000' })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/A Nossa casa de podcasts/i).parentElement
    ).toHaveStyle({
      width: '3.375rem',
      height: '3.6875rem'
    })
  })

  it('should render a big logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(/A Nossa casa de podcasts/i).parentElement
    ).toHaveStyle({
      width: '9rem',
      height: '9.938rem'
    })
  })

  it('should render a normal logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/A Nossa casa de podcasts/i).parentElement
    ).toHaveStyleRule('width', '3.375rem', {
      media: '(max-width: 768px)'
    })
  })
})
