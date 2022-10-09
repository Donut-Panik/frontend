import { FC } from 'react'

import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'

import { ReactComponent as Play } from 'ui/icons/play.svg'
import { Button } from 'ui/components'

const Wrapper = styled.div`
  display: flex;
  width: 80%;
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

const PlayButton = styled(Button)`
  position: absolute;
  height: 52px;
  width: 185px;
  right: 0;
  bottom: 0;
  border-radius: 64px;
  border: 1px solid ${theme.palette.gray};
  background-color: white;
  transition: transform ${theme.transition.hover}ms;

  &:hover {
    background-color: ${theme.palette.grayLight};
    transform: translateY(-5px);
  }
`

const PlayIcon = styled(Play)`
  position: absolute;
  left: 0;
  top: 0;
`

const PlayText = styled(Text)`
  margin-left: 24px;
`

export type ActivityBarProps = {
  name: string
  descriotion: string
  photo: string
  price: number
  onPlayClick?: () => void
}

export const ActivityBar: FC<ActivityBarProps> = ({
  name,
  descriotion,
  photo,
  price,
  onPlayClick
}) => (
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
      {onPlayClick && (
        <PlayButton onClick={onPlayClick}>
          <PlayIcon />
          <PlayText variant="t2" color={theme.palette.lightBlue} bold>
            Начать!
          </PlayText>
        </PlayButton>
      )}
    </Content>
  </Wrapper>
)
