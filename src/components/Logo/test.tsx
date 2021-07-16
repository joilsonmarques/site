import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a two logos', () => {
    renderWithTheme(<Logo />)
    expect(screen.getAllByLabelText(/A Nossa casa de podcasts/i)).toHaveLength(
      2
    )
  })

  // it('should render a black label when color is passed', () => {
  //   renderWithTheme(<Logo color="black" />)
  //   expect(
  //     screen.getAllByLabelText(/A Nossa casa de podcasts/i).parentElement
  //   ).toHaveStyle({ color: '#000000' })
  // })

  // it('should render a normal logo when size is default', () => {
  //   renderWithTheme(<Logo />)
  //   expect(
  //     screen.getByLabelText(/A Nossa casa de podcasts/i).parentElement
  //   ).toHaveStyle({
  //     width: '5.4rem',
  //     height: '5.9rem'
  //   })
  // })

  // it('should render a big logo', () => {
  //   renderWithTheme(<Logo size="large" />)
  //   expect(
  //     screen.getByLabelText(/A Nossa casa de podcasts/i).parentElement
  //   ).toHaveStyle({
  //     width: '14.4rem',
  //     height: '15.9rem'
  //   })
  // })

  // it('should render a normal logo without text if horizontalOnMobile', () => {
  //   renderWithTheme(<Logo horizontalOnMobile />)
  //   expect(
  //     screen.getByLabelText(/A Nossa casa de podcasts/i).parentElement
  //   ).toHaveStyleRule('width', '3.375rem', {
  //     media: '(max-width: 768px)'
  //   })
  // })
})
