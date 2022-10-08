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
    mainText: 'Завершить курс',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: '70 P',
    id: 1
  },
  {
    mainText: 'Принять участие в игре',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: '20 P',
    id: 2
  },
  {
    mainText: 'Создать команду в забеге',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum',
    price: '40 P',
    id: 3
  }
]

export const ProfileTasks: React.FC = () => {
  return (
    <Wrapper>
      {items.map((el, i) => (
        <Cart mainText={el.mainText} text={el.text} price={el.price} onPlayClick={() => {}} key={el.id}/>
      ))}
    </Wrapper>
  )
}
