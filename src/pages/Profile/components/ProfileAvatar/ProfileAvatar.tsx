import { FC } from 'react'
import { Image } from 'ui/components/Image'
import { Text } from 'ui/components/Text'

import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const ProfileAvatar: FC = () => (
  <Wrapper>
    <Image name="question" />
    <Text variant="h1" color={theme.palette.blueGray}>
      Пока здесь ничего нет :с
    </Text>
  </Wrapper>
)
