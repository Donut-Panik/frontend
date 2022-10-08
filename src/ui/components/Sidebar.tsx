import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { styled, theme } from 'ui/styles'

import { paths } from 'constant/pages'

import avatar from 'ui/images/avatar.png'
import { css } from 'styled-components'
import { Button } from './Button'
import user from 'ui/images/user.png'
import event from 'ui/images/event.png'
import active from 'ui/images/active.png'
import obmen from 'ui/images/obmen.png'
import history from 'ui/images/historyy.png'


// const items = [
//     {
//         name: 'Мой аватар',
//         icon: avatarka,
//     },
//     {
//         name: 'Мои задачи',
//         icon: zadachi
//     }
// ]

const SidebarContainer = styled.div`
  position: sticky;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.palette.white};
`
const Name = styled.span`
  color: ${theme.palette.main_text};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 22px;
`
const InfoSity = styled.span`
  color: ${theme.palette.sub_text};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
`

const InfoCompany = styled.span`
  color: ${theme.palette.sub_sub_text};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
`

const Btn1 = styled(Button)`
  color: ${theme.palette.blue};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`
const Wrapper = styled.div`
  display: flex;
`

const NavWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <img src={avatar} alt="avatar"></img>
      <Name>Моё имяяяяяяя</Name>
      <InfoSity>Ярославль, отдел IT</InfoSity>
      <InfoCompany>В компании более 1 года</InfoCompany>
      <NavWrapper>
      <Wrapper>
        <img src={user} alt="avatarka" />
        <Btn1>Мой аватар</Btn1>
      </Wrapper>
      <Wrapper>
        <img src={event} alt="event" />
        <Btn1>Мои задачи</Btn1>
      </Wrapper>
      <Wrapper>
        <img src={active} alt="active" />
        <Btn1>Активности</Btn1>
      </Wrapper>
      <Wrapper>
        <img src={obmen} alt="obmen" />
        <Btn1>Обмен валют</Btn1>
      </Wrapper>
      <Wrapper>
        <img src={history} alt="history" />
        <Btn1>История</Btn1>
      </Wrapper>
      </NavWrapper>
    </SidebarContainer>
  )
}
