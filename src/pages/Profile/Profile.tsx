import { FC, memo, useState } from 'react'

import { Button, Page } from 'ui/components'
import { Image } from 'ui/components/Image'
import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'

const Header = styled.div`
  width: 200%;
  height: 100px;
  background-color: ${theme.palette.lightBlue};
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 190px;
  padding: 0 24px;
`

const Controls = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 70px;
`

const ExitButton = styled(Button)``

const SettingsButton = styled(Button)``

const Avatar = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: -60px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: lightblue;
`

const Name = styled(Text)`
  margin: 16px 0;
`

const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 400px;
  background-color: white;
`

const Divider = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${theme.palette.gray};
`

const ItemBar = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 64px;
  gap: 8px;
  padding: 0 24px;

  background-color: ${({ isActive }) => (isActive ? 'rgba(181, 193, 225, 0.3)' : 'white')};

  &:hover {
    background-color: rgba(181, 193, 225, 0.3);
  }
`

const StyledIcon = styled(Image)`
  width: 24px;
  height: 24px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  background-color: white;
`

const AccountType = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 20px;
`

const Balance = styled.div`
  display: flex;
  height: 100%;
`
const NFT = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.palette.blueGray};
  padding: 0 16px;
  height: 100%;
  color: white;
`
const Charge = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.palette.yellow};
  padding: 0 16px;
  height: 100%;
  color: white;
`

const Roubles = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.palette.lightLightBlue};
  padding: 0 16px;
  height: 100%;
  color: white;
`

const items = [
  {
    label: 'Мой аватар',
    iconName: 'avatar',
    component: <div />
  },
  {
    label: 'Мои задачи',
    iconName: 'data',
    component: <div />
  },
  {
    label: 'Активности',
    iconName: 'event',
    component: <div />
  },
  {
    label: 'Обмен валют',
    iconName: 'currency',
    component: <div />
  },
  {
    label: 'История',
    iconName: 'history',
    component: <div />
  }
]

const _Profile: FC = () => {
  const [panelBarIdx, setPanelBarIdx] = useState(0)

  return (
    <Page>
      <Header></Header>
      <Wrapper>
        <Sidebar>
          <ProfileWrapper>
            <Controls>
              <ExitButton>
                <Image name="exit" width={40} />
              </ExitButton>
              <Avatar />
              <SettingsButton>
                <Image name="settings" width={40} />
              </SettingsButton>
            </Controls>
            <Name align="center" variant="h9" color={theme.palette.main_text} bold>
              Баранов Егор
            </Name>
            <Text variant="t4" color={theme.palette.grayDark}>
              Ярославль, отдел IT
            </Text>
            <Text variant="t7" color={theme.palette.sub_sub_text}>
              В компании более 1 года
            </Text>
          </ProfileWrapper>
          {items.map((el, i) => (
            <ItemBar isActive={i === panelBarIdx} onClick={() => setPanelBarIdx(i)}>
              <StyledIcon name={el.iconName} />
              <Text variant="t4" color={theme.palette.blue}>
                {el.label}
              </Text>
            </ItemBar>
          ))}
        </Sidebar>
        <Divider />
        <Content>
          <ProfileInfo>
            <AccountType>
              <Image name="medal_bronze" width={16} />
              <Text variant="t5">Бронзовый аккаунт</Text>
              <Image name="info" width={20} />
            </AccountType>
            <Balance>
              <NFT>
                <Text variant="t3">NFT отсутствует</Text>
              </NFT>
              <Charge>
                <Text variant="t3">30</Text>
              </Charge>
              <Roubles>
                <Text variant="t3">1170₽</Text>
              </Roubles>
            </Balance>
          </ProfileInfo>
        </Content>
      </Wrapper>
    </Page>
  )
}

export const Profile = memo(_Profile)