import { FC, useEffect, useState } from 'react'
import { useSendRequest } from 'shared/hooks/useSendRequest'
import { Loader } from 'ui/components'
import { Text } from 'ui/components/Text'

import { styled } from 'ui/styles'

import { Obmen } from './components/Obmen'

type historyType = {
  hash: string
  blockNumber: number
  timeStamp: number
  contractAddress: string
  from: string
  to: string
  tokenName: string
  tokenSymbol: string
  gasUsed: number
  confirmations: number
  isError?: string
  TokenID?: number
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 20px 20px 0 20px;
  margin: 30px;

  background: #FFFFFF;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  overflow-y: hidden;
`

export const ProfileHistory: FC = () => {
  const [history, setHistory] = useState<historyType[]>([])

  const onHistoryLoad = (data: any) => {
      setHistory(data.history)
  }

  const { sendRequest, isLoading, isSuccess } = useSendRequest(onHistoryLoad, 'history')

  useEffect(() => {
    const asd = {
      page: 1,
      offset: 2,
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
            <Obmen key={i} {...record} />
          ))}
        </Wrapper>
      )}
    </>
  )
}
