import { useEffect, useState } from 'react'
import { useGetRequest } from 'shared/hooks/useGetRequest'
import { Loader } from 'ui/components'
import { Cart } from 'ui/components/Cart'
import { Text } from 'ui/components/Text'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 24px;
  gap: 20px;
`

type TaskT = {
  id: number
  name: string
  descriotion: string
  price: number
  photo: string
  type: string
  nickname: string
  user_name: string
  user_surname: string
  date_end: string
  condition: string
}

export const ProfileTasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskT[]>([])

  const onLoad = (data: any) => {
    setTasks(data.items)
  }

  const { mutate, isLoading } = useGetRequest(onLoad, 'myevents')

  useEffect(() => {
    mutate({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return isLoading ? (
    <Loader />
  ) : (
    <Wrapper>
      {!tasks.length && <Text variant="t2">Задачи отсутствуют</Text>}
      {tasks.map((el, i) => (
        <Cart
          mainText={el.name}
          text={el.descriotion}
          price={el.price}
          onPlayClick={() => {}}
          key={el.id}
        />
      ))}
    </Wrapper>
  )
}
