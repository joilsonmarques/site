import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FeaturedPodcast from '.'

const props = {
  title: 'A nossa casa indica',
  cover: 'https://source.unsplash.com/cCIVkw4K27A/1600x900',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  podcast: {
    cover: '/img/podcasts/calango-careta.jpeg',
    title: 'Calango Careta',
    subtitle: 'Por MarcioRamos',
    description:
      'Sobre Brasília, música, cotidiano e demais atividades culturais aleatórias produzidas pelo Bloco do Calango Careta!',
    slug: 'calango-careta',
    lastEpisode: {
      cover: '/img/podcasts/calango-careta.jpeg',
      title: 'Introdução à astrologia',
      slug: 'introducao-a-astrologia',
      embed:
        '<iframe src="https://open.spotify.com/embed/episode/7l6kyf9DCF9oTCAg3pzSnO" width="100%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
      embedUrl: 'https://open.spotify.com/embed/episode/7l6kyf9DCF9oTCAg3pzSnO',
      categories: [
        { name: 'carnaval', slug: 'carnaval' },
        { name: 'arte', slug: 'arte' },
        { name: 'brasília', slug: 'brasilia' },
        { name: 'música', slug: 'musica' }
      ]
    }
  }
}

describe('<FeaturedPodcast />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<FeaturedPodcast {...props} />)

    expect(screen.getByLabelText(/ver podcast/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/voltar para apresentação/i)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  // it('should handle the open/close the menu', () => {
  //   renderWithTheme(<Menu />)

  //   const fullMenuElement = screen.getByRole('navigation', { hidden: true })

  //   //verificar se o menu está escondido
  //   expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
  //   expect(fullMenuElement).toHaveStyle({ opacity: 0 })

  //   // clicar no botão de abrir o menu e verificar se ele abriu
  //   fireEvent.click(screen.getByLabelText(/abrir menu/i))
  //   expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
  //   expect(fullMenuElement).toHaveStyle({ opacity: 1 })

  //   // clicar no botão de fechar o menu e verificar se ele fechou
  //   fireEvent.click(screen.getByLabelText(/fechar menu/i))
  //   expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
  //   expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  // })
})
