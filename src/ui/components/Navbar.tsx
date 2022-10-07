import { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { styled, theme } from 'ui/styles'
import { RootRouter } from 'routes/routes'
import { paths } from 'constant/pages'
import { Link } from 'react-router-dom'
import { Text } from './Text'

import logo from 'ui/images/logo2.png'
import { css } from 'styled-components'

const StyledText = styled(Text)`
  margin-right: 32px;
  width: 120px;
`

const NavbarContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-around;
  background-color: ${theme.palette.blue};
`
const Container = styled.div`
  width: 788px;
  margin-top: 14px;
  margin-bottom: 14px;

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

const Logo = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
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
        <Element to={paths.login} active={false}>
          Профиль
        </Element>
      </Container>
    </NavbarContainer>
  )
}
