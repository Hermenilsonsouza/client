import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBotton?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBotton = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBotton={lineBotton}>
    {children}
  </S.Wrapper>
)

export default Heading
