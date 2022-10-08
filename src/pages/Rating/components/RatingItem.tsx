import { ReactComponent as Sprite } from 'ui/icons/underline_sprite.svg'

import { styled, theme } from 'ui/styles'
import triangle from 'ui/images/triangle.png'

const items = [
  {
    number: 1,
    name: 'Баранов Егор',
    info: 'бронзовый уровень',
    score: 120,
    rub: 200
  },
  {
    number: 2,
    name: 'Баранов Егор',
    info: 'серебряный уровень',
    score: 104,
    rub: 140
  }
]

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
const Res = styled.span`
  font-weight: 600;
  font-size: 60px;
  color: ${theme.palette.graph_green};
`

const Name = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #2f3441;
`
const Info = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: #595d67;
`

const Score = styled.span`
  font-weight: 500;
  font-size: 32px;
  color: ${theme.palette.graph_green};
`
const Exy = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: ${theme.palette.graph_green};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const AvatarIcon = styled.div`
  left: 0;
  margin-top: 7px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightblue;
`

export const RatingItem: React.FC = () => {
  return (
    <Wrapper>
      {items.map((el) => (
        <Item>
          <Res>{el.number}</Res>
          <AvatarIcon />
          <Column>
            <Name>{el.name}</Name>
            <Info>{el.info}</Info>
          </Column>
          <Score>{el.score}</Score>
          <Column>
          <span>Награда:</span>
          <Exy>{el.rub}</Exy>
          </Column>
          
        </Item>
      ))}
    </Wrapper>
  )
}
