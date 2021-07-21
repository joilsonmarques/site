import { render, screen } from '@testing-library/react'

import EpisodeCard from '.'

const props = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  podcast: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}

describe('<EpisodeCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<EpisodeCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.podcast })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/espisode/${props.slug}`
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Ribbon', () => {
    render(<EpisodeCard {...props} ribbon="My Ribbon" ribbonSize="small" />)
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
