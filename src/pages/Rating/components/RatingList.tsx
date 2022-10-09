import { styled } from 'ui/styles'
import { RatingItem } from './RatingItem'

import search from 'ui/images/searc.png'

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 15px;
  margin-right: 20px;
`

const Check = styled.span`
  font-weight: 600;
  font-size: 32px;
  margin: 15px;
`
const Img = styled.img`
  position: absolute;
  font-size: 12px;
`
const Input = styled.input`
  position: relative;
  min-width: 260px;
  height: 50px;

  border: 2px solid #b6c1dd;
  border-radius: 12px;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const RatingList: React.FC = () => {
  return (
    <Header>
      <Row>
        <Check>IT-отдел</Check>
        <Input placeholder="Search" type="search" />
      </Row>
      <RatingItem />
    </Header>
  )
}
