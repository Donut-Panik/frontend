import { styled, theme } from 'ui/styles'

import line from 'ui/images/line.png'

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
  align-items: center;
`
const Res = styled.span`
  font-weight: 600;
  font-size: 50px;
  color: ${theme.palette.graph_green};
  width: 40px;
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

const Exy = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: ${theme.palette.graph_green};
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  margin-top: 20px;
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
        <Item key={el.number}>
          <Res>{el.number}</Res>
          <img src={line} alt="line" />
          <AvatarIcon />
          <Column>
            <Name>{el.name}</Name>
            <Info>{el.info}</Info>
          </Column>
          <img src={line} alt="line" />
          <Column>
            <span>Награда:</span>
            <Exy>{el.rub}</Exy>
          </Column>
        </Item>
      ))}
    </Wrapper>
  )
}
