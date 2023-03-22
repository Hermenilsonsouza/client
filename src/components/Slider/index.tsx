import * as S from './styles'
import SlickSlider, { Settings } from 'react-slick'

export type SliderSetttings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSetttings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
