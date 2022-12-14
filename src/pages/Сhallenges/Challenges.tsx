import { FC, memo, useContext, useEffect, useState } from 'react'

import { Button, Loader, Page } from 'ui/components'
import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'

import { ChallengeCard } from './components/ChallengeCard'
import { Modal } from 'ui/components/Modal'
import { ModalInfo } from 'ui/components/ModalInfo'

import { ReactComponent as Sprite } from 'ui/icons/underline_sprite.svg'
import { ReactComponent as Info } from 'ui/icons/info.svg'
import { ReactComponent as Marker } from 'ui/icons/marker.svg'

import ellipse from 'ui/images/ellipse.png'
import { useGetRequest } from 'shared/hooks/useGetRequest'
import { AuthContext } from 'shared/context/context'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  height: 56px;
  margin-top: 24px;
  margin-bottom: 20px;
`

const Tasks = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
`

const StyledHeader = styled(Text)`
  height: 100%;
`

const StyledText = styled(Text)``

const InfoIcon = styled(Info)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: ${theme.palette.blueGray};
`

const StyledSprite = styled(Sprite)`
  position: absolute;
  top: 8px;
`

const Information = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
`
const Choose = styled(Text)<{ isActive: boolean }>`
  color: ${({ isActive }) =>
    isActive ? `${theme.palette.blue}` : `${theme.palette.blueGray}`};
  transition: color ${theme.transition.blink}ms;
`

const Switcher = styled(Marker)<{ isActive: boolean }>`
  transform: ${({ isActive }) => (isActive ? 'rotate(0deg)' : 'rotate(120deg)')};

  transition: all ${theme.transition.slide}ms;
`

const Ellipse = styled.img`
  position: absolute;
  bottom: 0px;
  height: 90px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 0;
`

const _Challenges: FC = () => {
  const { setNewUser } = useContext(AuthContext)
  const [isDaily, setIsDaily] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  const onSwitcherClick = () => {
    setIsDaily((prev) => !prev)
  }

  const isModalOpen = (isOpen: boolean) => {
    setModalOpen(isOpen)
  }

  const onLoadProfile = (data: any) => {
    setNewUser(data)
  }

  const { mutate, isLoading } = useGetRequest(onLoadProfile, 'whoiam')

  useEffect(() => {
    mutate({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Page>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Header>
            <Tasks>
              <StyledHeader variant="h3" color={theme.palette.blue}>
                ????????????
              </StyledHeader>
              <StyledSprite />
              <Information>
                <StyledText variant="t0" color={theme.palette.blueGray}>
                  ???? ?????????????????? NFT ???????????????? 5 ???????? ???????????????? ????????????
                </StyledText>
                <InfoIcon onClick={() => isModalOpen(true)} />
                <Modal isVisible={modalOpen} onOverlayClick={() => isModalOpen(false)}>
                  <ModalInfo isVisible={setModalOpen} />
                </Modal>
              </Information>
            </Tasks>
          </Header>
          <Content>
            <ChallengeCard
              label="?????????????????? ????????"
              price={70}
              onPlayClick={() => {}}
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla "
            />
            <ChallengeCard
              label="?????????????? ?????????????? ?? ????????"
              price={20}
              onPlayClick={() => {}}
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla "
            />
            <ChallengeCard
              label="?????????????? ?????????????? ?? ????????????"
              price={40}
              onPlayClick={() => {}}
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla "
            />
          </Content>
          <SwitcherWrapper>
            <Button onClick={onSwitcherClick}>
              <Choose isActive={isDaily} variant="h8">
                ????????????????????
              </Choose>
            </Button>
            <Switcher isActive={isDaily} />
            <Button onClick={onSwitcherClick}>
              <Choose isActive={!isDaily} variant="h8">
                ????????????????????????
              </Choose>
            </Button>
          </SwitcherWrapper>
          <Ellipse src={ellipse} />
        </Wrapper>
      )}
    </Page>
  )
}

export const Challenges = memo(_Challenges)
