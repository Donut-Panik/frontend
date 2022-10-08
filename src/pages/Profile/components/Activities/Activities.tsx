import { Cart } from 'ui/components/Cart'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 24px;
  gap: 20px;
`

const items = [
  {
    mainText: 'Проектный забег',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: '70 P'
  },
  {
    mainText: 'Массовая игра',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: '20 P'
  },
  {
    mainText: 'Задача от руководителя',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: '40 P'
  }
]

export const ProfileActivities: React.FC = () => {
  return (
    <Wrapper>
      {items.map((el) => (
        <Cart mainText={el.mainText} text={el.text} price={el.price} onPlayClick={() => {}}/>
      ))}
    </Wrapper>
  )
}