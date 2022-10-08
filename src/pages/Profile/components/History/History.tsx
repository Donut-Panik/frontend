import { FC, useEffect, useState } from 'react'
import { useSendRequest } from 'shared/hooks/useSendRequest'
import { Loader } from 'ui/components'
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
  background-color: ${({ odd }) => (odd ? 'white' : 'rgba(182, 193, 221, 0.2)')};
  padding: 20px;
`

export const ProfileHistory: FC = () => {
  const [history, setHistory] = useState([1, 2, 3, 4])

  const onHistoryLoad = (data: any) => {
    if (isSuccess) {
      setHistory(data.history)
    }
  }

  const { sendRequest, isLoading, isSuccess } = useSendRequest(onHistoryLoad, 'history')

  useEffect(() => {
    const asd = {
      page: 1,
      offset: 1,
      sort: 'string',
      publicKey: 'string'
    }

    sendRequest(asd)
  }, [sendRequest])
  console.log(history)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Text variant="h3">История операций</Text>
          {history.map((record, i) => (
            <Expanded odd={i % 2 !== 0}>{record}</Expanded>
          ))}
        </Wrapper>
      )}
    </>
  )
}
