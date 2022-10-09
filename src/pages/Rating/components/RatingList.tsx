import { Text } from 'ui/components/Text'
import { styled } from 'ui/styles'
import { RatingItem } from './RatingItem'

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 15px;
  margin-right: 20px;
`

const Check = styled(Text)`
  margin: 15px;
`

const Input = styled.input`
  position: relative;
  min-width: 260px;
  height: 50px;

  border: 2px solid #b6c1dd;
  border-radius: 12px;
`
const Row = styled.div``

export const RatingList: React.FC = () => {
  return (
    <Header>
      <Row>
        <Check variant="h3">IT-отдел</Check>
        <Input placeholder="Search" type="search" />
      </Row>
      <RatingItem />
    </Header>
  )
}
