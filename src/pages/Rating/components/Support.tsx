import under from 'ui/images/under.png'
import bottom from 'ui/images/bottom.png'

import { styled, theme } from 'ui/styles'

const Text = styled.span`
  position: absolute;
  margin-top: 30px;
  margin-left: 30px;

  color: #2f3441;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 32px;
`

const TextLight = styled.span`
  position: absolute;
  margin-bottom: 30px;
  margin-left: 30px;

  color: #2f3441;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 24px;
`

const Logo = styled.div`
  position: relative;
`
const Img = styled.img`
  margin: 0px;
  padding: 0px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Support: React.FC = () => {
  return (
    <Column>
      <Logo>
        <Text>Так держать!</Text>
        <Img src={under} alt="logo" />
      </Logo>
      <Logo>
        <TextLight>Осталось совсем чуть-чуть</TextLight>
        <Img src={bottom} alt="logo"></Img>
      </Logo>
    </Column>
  )
}
