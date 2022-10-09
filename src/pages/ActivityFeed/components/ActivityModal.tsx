import { FC } from 'react'

import { Button, Modal } from 'ui/components'
import { styled, theme } from 'ui/styles'
import { Text } from 'ui/components/Text'

import feed_event from 'ui/images/feed_event.png'
import { ReactComponent as Play } from 'ui/icons/play.svg'
import { useSendRequest } from 'shared/hooks/useSendRequest'

const Wrapper = styled.div`
  display: flex;
`

const Image = styled.img``

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
`

const Divider = styled.div`
  width: 300px;
  height: 2px;
  background-color: ${theme.palette.blue};
`

const AcceptButton = styled(Button)`
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

type Props = {
  id: number
  label: string
  isOpen: boolean
  onOverlayClick: () => void
}

export const ActivityModal: FC<Props> = ({ id, label, isOpen, onOverlayClick }) => {
  const onAcceptClick = () => {
    sendRequest({})
  }

  const { sendRequest } = useSendRequest(onOverlayClick, `accept/${id}`)

  return (
    <Modal isVisible={isOpen} onOverlayClick={onOverlayClick}>
      <Wrapper>
        <Image src={feed_event} />
        <Content>
          <Text variant="h4" color={theme.palette.main_text}>
            {label}
          </Text>
          <Information>
            <Text variant="t5" color={theme.palette.grayDark}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
              sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
              dolor purus non enim praesent elementum facilisis leo, vel fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis
              scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu
              volutpat odio facilisis mauris sit amet massa
            </Text>
            <Divider />
            <Text variant="t5" color={theme.palette.grayDark}>
              Создатель: Баранов Егор
            </Text>
            <Text variant="t5" color={theme.palette.grayDark}>
              Дата создания: 13:42 08.10.2022
            </Text>
            <Text variant="t5" color={theme.palette.grayDark}>
              Активно до:
            </Text>
          </Information>
          <AcceptButton onClick={onAcceptClick}>
            <PlayIcon />
            <PlayText variant="t2" color={theme.palette.lightBlue} bold>
              Начать!
            </PlayText>
          </AcceptButton>
        </Content>
      </Wrapper>
    </Modal>
  )
}
