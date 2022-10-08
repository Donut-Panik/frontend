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
  background-color: ${({ odd }) => (odd ? 'white' : 'gray')};
  height: 21px;
`

export const ProfileHistory: FC = () => {
  const [history, setHistory] = useState([])

  const onHistoryLoad = () => {
    console.log(queryResult)
  }

  const { sendRequest, isLoading, queryResult, isSuccess } = useSendRequest(onHistoryLoad, 'history')

  useEffect(() => {
    const asd = {
      page: 1,
      offset: 1,
      sort: 'string',
      publicKey: 'string'
    }

    sendRequest(asd)
  }, [sendRequest])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Text variant="h3">История операций</Text>
          {history.map((record, i) => (
            <Expanded odd={i % 2 === 10}>{record}</Expanded>
          ))}
        </Wrapper>
      )}
    </>
  )
}
