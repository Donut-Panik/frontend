import under from 'ui/images/under.png'
import bottom from 'ui/images/bottom.png'

import { ReactComponent as Sprite } from 'ui/icons/underline_sprite.svg'

import { styled, theme } from 'ui/styles'
import triangle from 'ui/images/triangle.png'
import { RatingItem } from './RatingItem'

const Header = styled.div`
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
    font-size: 12px;
`
const Input = styled.input`
    min-width: 260px;
    height: 50px;

    border: 2px solid #B6C1DD;
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