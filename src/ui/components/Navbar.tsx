import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { styled, theme } from 'ui/styles'

import { paths } from 'constant/pages'

import logo from 'ui/images/logo2.png'
import { css } from 'styled-components'

const NavbarContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-around;
  background-color: ${theme.palette.blue};
`
const Container = styled.div`
  margin-top: 18px;
  margin-bottom: 12px;
  gap: 50px;

  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid transparent;
`

const Element = styled(NavLink)<{ active: boolean }>`
  color: ${theme.palette.white};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s linear;
  border-bottom: ${({ active }) => (active ? `3px solid ${theme.palette.white}` : '')};
  :hover {
    border-bottom: 3px solid ${theme.palette.white};
  }
  ${({ active }) =>
    active &&
    css`
      &::after {
        content: '';
      }
    `}
`

const Profil = styled(NavLink)<{ active: boolean }>`
  width: 120px;
  margin-top: 18px;
  margin-bottom: 12px;
  color: ${theme.palette.white};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s linear;
  border-bottom: ${({ active }) => (active ? `3px solid ${theme.palette.white}` : '')};
  :hover {
    border-bottom: 3px solid ${theme.palette.white};
  }
`

const Logo = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 120px;
`

export const Navbar: FC = () => {
  //const navigate = useNavigate();

  return (
    <NavbarContainer>
      <Logo src={logo} alt="vtb" width={120} />
      <Container>
        <Element to={paths.login} active={true}>
          Лента активности
        </Element>
        <Element to={paths.store} active={false}>
          Mагазин
        </Element>
        <Element to={paths.store} active={false}>
          Развитие
        </Element>
        <Element to={paths.store} active={false}>
          Топ-лист
        </Element>
      </Container>
      <Profil to={paths.login} active={false}>
        Профиль
      </Profil>
    </NavbarContainer>
  )
}
