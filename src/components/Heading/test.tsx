import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Logo />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Título de sessão</Heading>)
    expect(
      screen.getByRole('heading', { name: /título de sessão/i })
    ).toHaveStyle({ color: '#FFFFFF' })
  })
  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Título de sessão</Heading>)
    expect(
      screen.getByRole('heading', { name: /título de sessão/i })
    ).toHaveStyle({ color: '#000000' })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Título de sessão</Heading>)
    expect(
      screen.getByRole('heading', { name: /título de sessão/i })
    ).toHaveStyle({ 'font-size': '1.5rem' })
  })
})
