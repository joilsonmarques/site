import { render, screen } from '@testing-library/react'

import MemberList from '.'

describe('<MemberList />', () => {
  it('should render the heading', () => {
    const { container } = render(<MemberList />)

    expect(
      screen.getByRole('heading', { name: /MemberList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
