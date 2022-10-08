import { FC, memo } from 'react'

import { styled, theme } from 'ui/styles'
import { Image } from 'ui/components/Image'

import avatar from 'ui/images/avatar.png'

const items1 = [
  {
    label: 'Вы находитесь на',
    info: '1 месте!'
  },
  {
    label: 'До конца рейтинга',
    info: '12:39'
  }
]

const items2 = [
  {
    label: 'Выш счёт:',
    info: '120₽'
  },
  {
    label: 'Отрыв на',
    info: '16₽'
  }
]

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 24px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid #b6c1dd;

  margin: 20px;
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
const Text = styled.span`
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

const Header = styled.div`
  width: 448px;
  height: 130px;

  border-radius: 24px 24px 0px 0px;
  background-color: ${theme.palette.blue};
`

const Footer = styled.div`
  width: 448px;
  height: 220px;

  border-radius: 24px;
  background-color: ${theme.palette.white};
`

const InfoText = styled.span`
  color: #82858d;
  font-weight: 400;
  font-size: 20px;
`

const InfoResult = styled.span`
  color: ${theme.palette.blue};
  font-weight: 600;
  font-size: 60px;
`

const InfoResultGreen = styled.span`
  color: ${theme.palette.graph_green};
  font-weight: 600;
  font-size: 60px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Avatar = styled.div`
  display: flex;
  justify-content: space-around;
`

const Name = styled.span`
  font-weight: 500;
  font-size: 28px;
  color: ${theme.palette.white};
  margin-top: 55px;
  margin-left: 30px;
`

const AvatarIcon = styled.div`
  position: absolute;
  left: 0;
  margin: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightblue;
`

const _ProfileRating: FC = () => {
  return (
    <Content>
      <Header>
        <Element>
          <Text>IT</Text>
        </Element>
        <Avatar>
          <AvatarIcon />
          <Name>Баранов Егор</Name>
        </Avatar>
      </Header>
      <Footer>
        <Row>
          <Column>
          {items1.map((el) => (
            <Info>
              <InfoText>{el.label}</InfoText>
              <InfoResult>{el.info}</InfoResult>
            </Info>
          ))}
          </Column>
          <Column>
          {items2.map((el) => (
            <Info>
              <InfoText>{el.label}</InfoText>
              <InfoResultGreen>{el.info}</InfoResultGreen>
            </Info>
          ))}
          </Column>
        </Row>
      </Footer>
    </Content>
  )
}

export const ProfileRating = memo(_ProfileRating)
