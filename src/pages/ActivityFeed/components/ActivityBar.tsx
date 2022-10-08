import { FC } from 'react'
import { Text } from 'ui/components/Text'

import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  box-sizing: border-box;
  border-radius: 24px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: white;

  margin-bottom: 16px;
`

const Image = styled.img`
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  border: 0;
  outline: 0;
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: 16px;
`

const PriceWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 24px;
  background-color: ${theme.palette.lightLightBlue};
  border-bottom-left-radius: 24px;
  border-top-right-radius: 24px;
  color: white;
`

export type ActivityBarProps = {
  name: string
  descriotion: string
  photo: string
  price: number
}

export const ActivityBar: FC<ActivityBarProps> = ({ name, descriotion, photo, price }) => (
  <Wrapper>
    <Image src={photo || ''} width="120" height="120" />
    <Content>
      <PriceWrapper>
        <Text variant="h8">{`${price.toString()}₽`}</Text>
      </PriceWrapper>
      <Text variant="h8">{name}</Text>
      <Text variant="t4" color={theme.palette.grayDark}>
        {descriotion}
      </Text>
    </Content>
  </Wrapper>
)
