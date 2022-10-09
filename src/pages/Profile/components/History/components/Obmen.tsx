import { FC } from 'react'

import { styled, theme } from 'ui/styles'

type historyTypeProps = {
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

const Name = styled.p`
  color: ${theme.palette.main_text};
  font-weight: 400;
  font-size: 24px;
`
const Info = styled.p`
  color: ${theme.palette.sub_sub_text};
  font-weight: 400;
  font-size: 16px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
const Rub = styled.p`
  color: ${theme.palette.graph_green};
  font-weight: 400;
  font-size: 24px;
  margin-left: 20px;
`

export const Obmen: FC<historyTypeProps> = ({
  hash,
  blockNumber,
  timeStamp,
  contractAddress,
  from,
  to,
  tokenName,
  tokenSymbol,
  gasUsed,
  confirmations,
  isError,
  TokenID
}) => {
  return (
    <div>
      <Row>
        <Name>Обмен валюты</Name>
        <div>
          <Row>
            <Info>08.10.2022</Info>
            <Rub>40 ₽</Rub>
          </Row>
        </div>
      </Row>
      <Info>Номер блока: {blockNumber}</Info>
      <Info>Время выполнения: {timeStamp}</Info>
      <Info>Адрес контракта токена: {contractAddress}</Info>
      <Info>Публичный ключ отправителя: {from}</Info>
      <Info>Публичный ключ получателя: {to}</Info>
      <Info>Наименование токена: {tokenName}</Info>
      <Info>Комиссия на совершение транзакции: {gasUsed}</Info>
      <Info>Количество подтверждений транзакции: {confirmations}</Info>
    </div>
  )
}
