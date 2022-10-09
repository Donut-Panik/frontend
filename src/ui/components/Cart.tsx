import { PropsWithChildren } from 'react'
import { styled, theme } from 'ui/styles'

import { Button } from 'ui/components'
import { Text } from 'ui/components/Text'

import { ReactComponent as Play } from 'ui/icons/play.svg'

export type CartProps = {
  mainText?: string
  text?: string
  price?: number
  onPlayClick?: () => void
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;

  border-radius: 24px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  background: #ffffff;
`
const Side = styled.img`
  width: 360px;
  height: 200px;
  border-radius: 24px 0px 0px 24px;
  background-color: ${theme.palette.lightLightBlue}; ;
`
const Element = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 97px;
  height: 45px;

  border-radius: 0px 24px;
  background-color: ${theme.palette.sub_main};
`
const Text2 = styled.span`
  position: absolute;
  right: 0;
  left: 0;
  margin-top: 10px;
  text-align: center;

  color: ${theme.palette.white};
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`
const MainText = styled.span`
  color: ${theme.palette.main_text};
  font-weight: 600;
  font-size: 26px;
  margin: 10px 20px;
`
const LightText = styled.p`
  color: ${theme.palette.grayDark};
  font-weight: 400;
  font-size: 18px;
  margin: 10px 20px;
`
const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const PlayButton = styled(Button)`
  position: absolute;
  left: 455px;
  height: 52px;
  width: 185px;
  bottom: 0px;
  border-radius: 64px;
  border: 1px solid ${theme.palette.gray};
  background-color: white;
  transition: transform ${theme.transition.hover}ms;

  &:hover {
    background-color: ${theme.palette.grayLight};
    transform: translateY(-5px);
  }
`

const PlayIcon = styled(Play)`
  position: absolute;
  left: 0;
  top: 0;
`

const PlayText = styled(Text)`
  margin-left: 24px;
`

export const Cart: React.FC<PropsWithChildren<CartProps>> = ({ mainText, text, price, onPlayClick }) => {
  return (
    <Wrapper>
      <Side />
      <WrapperText>
        <MainText>{mainText}</MainText>
        <LightText>{text}</LightText>
      </WrapperText>
      <Element>
        <Text2>{price}</Text2>
      </Element>
      {onPlayClick && (
        <PlayButton onClick={onPlayClick}>
          <PlayIcon />
          <PlayText variant="t2" color={theme.palette.lightBlue} bold>
            Начать!
          </PlayText>
        </PlayButton>
      )}
    </Wrapper>
  )
}
