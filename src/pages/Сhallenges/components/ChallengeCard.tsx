import { FC, memo } from 'react'
import { Button } from 'ui/components'
import { Text } from 'ui/components/Text'

import { styled, theme } from 'ui/styles'

import { ReactComponent as Play } from 'ui/icons/play.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 405px;
  width: 320px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
`

const PlayButton = styled(Button)`
  position: absolute;
  left: 65px;
  height: 52px;
  width: 185px;
  bottom: -16px;
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

const ImageWrapper = styled.div`
  position: relative;
  height: 224px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`

const Image = styled.img`
  outline: 0;
  border: 0;
  background-color: transparent;
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${theme.palette.off_sub_main};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  border-top-right-radius: 24px;
  padding: 12px 24px;
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

const TextWrapper = styled.div`
  display: flex;
  padding: 20px;
`

type CardProps = {
  price: number
  label: string
  info: string
  imgLink?: string
  onPlayClick?: () => void
}

const _ChallengeCard: FC<CardProps> = ({ price, label, imgLink, info, onPlayClick }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imgLink} />
        <Title>
          <Text variant="t0" bold>
            {label}
          </Text>
        </Title>
        <PriceWrapper>
          <Text variant="h8">{`${price}₽`}</Text>
        </PriceWrapper>
      </ImageWrapper>
      <TextWrapper>
        <Text variant="t2" color={theme.palette.grayDark}>
          {info}
        </Text>
      </TextWrapper>
      {onPlayClick && (
        <PlayButton onClick={onPlayClick}>
          <PlayIcon />
          <PlayText variant="t2" color={theme.palette.lightBlue} bold>
            Начать!
          </PlayText>
        </PlayButton>
      )}
    </Wrapper>
  )
}

export const ChallengeCard = memo(_ChallengeCard)
