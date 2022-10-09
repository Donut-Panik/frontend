import { FC, useState } from 'react'
import { Button } from 'ui/components'
import { Image } from 'ui/components/Image'
import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 24px;
  gap: 20px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
`

const Content = styled.div`
  display: flex;
  gap: 24px;
`

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Sumbit = styled(Button)`
  width: 200px;
  height: 54px;
  background-color: ${theme.palette.lightBlue};
  border-radius: 24px;
`

const FieldsWrapper = styled.div``

const FieldWrapper = styled.div`
  width: 160px;
  padding: 10px 20px;
  border: 2px solid #b6c1dd;
  border-radius: 24px;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

const StyledInput = styled.input`
  border: 0;
  outline: 0;
`

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #002882;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 24px;
  height: 100%;
  width: 100%;
  gap: 12px;
`

const OrderInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${theme.palette.blueGray};
`

const Position = styled.div``

const TradeIcon = styled(Image)``

export const ProfileTrade: FC = () => {
  const [tradeSum, setTradeSum] = useState<number>(0)

  return (
    <Wrapper>
      <Text variant="h8">Обмен валют</Text>
      <Content>
        <FieldsWrapper>
          <FieldWrapper>
            <Text variant="t8" color={theme.palette.sub_sub_text} bold>
              Сумма обмена
            </Text>
            <StyledInput value={tradeSum} onChange={(e) => setTradeSum(Number(e.target.value))} type="number" min={1} />
          </FieldWrapper>
          <FieldWrapper>
            <Text variant="t8" color={theme.palette.sub_sub_text} bold>
              Полученная сумма
            </Text>
            <StyledInput value={tradeSum} onChange={(e) => setTradeSum(Number(e.target.value))} type="number" min={1} />
          </FieldWrapper>
        </FieldsWrapper>
        <OrderWrapper>
          <Text variant="t2" color={theme.palette.main_text} bold>
            Предварительный расчёт
          </Text>
          <OrderInfoWrapper>
            <Position>
              <Text variant="t8" color={theme.palette.sub_sub_text} bold>
                У меня есть
              </Text>
              <Text variant="h9" bold>
                {`${tradeSum}₽`}
              </Text>
            </Position>
            <TradeIcon name="trade" width="24" />
            <Position>
              <Text variant="t8" color={theme.palette.sub_sub_text} bold>
                Мне надо получить
              </Text>
              <Text variant="h9" bold>
                {`${tradeSum}₽`}
              </Text>
            </Position>
            <Divider />
            <Position>
              <Text variant="t8" color={theme.palette.lightBlue} bold>
                Курс
              </Text>
              <Text variant="h9" color={theme.palette.lightBlue} bold>
                1₽ = 1₽
              </Text>
            </Position>
          </OrderInfoWrapper>
        </OrderWrapper>
      </Content>
      <SubmitWrapper>
        <Sumbit>
          <Text variant="t3" color={theme.palette.white}>
            Обменять
          </Text>
        </Sumbit>
      </SubmitWrapper>
    </Wrapper>
  )
}
