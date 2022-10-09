import { Cart } from 'ui/components/Cart'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  padding: 24px;
  gap: 20px;
`

const Content = styled.div`
  margin: 24px;

  display: flex;
  flex-direction: column;
`

const items = [
  {
    mainText: 'Проектный забег',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: 70,
    id: 1
  },
  {
    mainText: 'Массовая игра',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: 20,
    id: 2
  },
  {
    mainText: 'Задача от руководителя',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: 40,
    id: 3
  }
]

export const ProfileActivities: React.FC = () => {
  return (
    <Wrapper>
      {items.map((el) => (
        <Cart
          mainText={el.mainText}
          text={el.text}
          price={el.price}
          onPlayClick={() => {}}
          key={el.id}
        />
      ))}
    </Wrapper>
  )
}
