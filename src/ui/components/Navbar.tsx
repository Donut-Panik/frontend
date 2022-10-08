import { FC } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { styled, theme } from 'ui/styles'
import { paths } from 'constant/pages'
import { Text } from './Text'

import logo from 'ui/images/logo2.png'
import { css } from 'styled-components'
import { Button } from './Button'

const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  height: 54px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.palette.blue};
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`

const Element = styled(NavLink)<{ active: boolean }>`
  color: ${theme.palette.white};
  position: relative;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s linear;

  &:hover {
    color: ${theme.palette.lightBlue};
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 64px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        border-radius: 4px;
        border-bottom: 4px solid ${theme.palette.lightBlue};
      }
    `}
`

const Profile = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 120px;
  height: 56px;
  color: ${theme.palette.white};
  text-decoration: none;
  transition: color 0.2s linear;

  &:hover {
    color: ${theme.palette.lightBlue};
  }
`

const Logo = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;

  width: 70px;
  height: 24px;

  transition: transform ${theme.transition.hover}ms;

  &:hover {
    transform: scale(1.1);
  }
`

const tabs = [
  {
    label: 'Лента активности',
    path: paths.challenges
  },
  {
    label: 'Магазин',
    path: paths.store
  },
  {
    label: 'Развитие',
    path: paths.education
  },
  {
    label: 'Топ-лист',
    path: paths.rating
  }
]

export const Navbar: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <NavbarContainer>
      <Button onClick={() => navigate(paths.home)}>
        <Logo src={logo} alt="vtb" />
      </Button>
      <Container>
        {tabs.map((el, i) => (
          <Element to={el.path} active={location.pathname === el.path} key={i}>
            <Text variant="t5">{el.label}</Text>
          </Element>
        ))}
      </Container>
      <Profile to={paths.profile}>
        <Text variant="t5">Профиль</Text>
      </Profile>
    </NavbarContainer>
  )
}
