import * as S from './styles'

export type lineColorProps = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBotton?: boolean
  size?: 'medium' | 'small' | 'huge'
  lineColor?: lineColorProps
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBotton = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBotton={lineBotton}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
