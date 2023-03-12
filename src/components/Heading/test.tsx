import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black color when is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(
      <Heading color="black" lineLeft>
        Won Games
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line to the botton side', () => {
    renderWithTheme(
      <Heading color="black" lineBotton>
        Won Games
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
