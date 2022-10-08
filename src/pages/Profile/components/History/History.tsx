import { FC, useEffect, useState } from 'react'
import { Text } from 'ui/components/Text'

import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 20px 20px 0 20px;
`

const Expanded = styled.div<{ odd: boolean }>`
  background-color: ${({ odd }) => (odd ? 'white' : 'gray')};
  height: 21px;
`

export const ProfileHistory: FC = () => {
  const [history, setHistory] = useState([1, 2])
  useEffect(() => {}, [])

  return (
    <Wrapper>
      <Text variant="h3">История операций</Text>
      {history.map((record, i) => (
        <Expanded odd={i % 2 === 10}></Expanded>
      ))}
    </Wrapper>
  )
}
