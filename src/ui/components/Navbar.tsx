import { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { styled, theme } from 'ui/styles'
import { RootRouter } from 'routes/routes'
import { paths } from 'constant/pages'
import { Link } from 'react-router-dom'

import logo from 'ui/images/logo2.png'

const NavbarContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-around;
  background-color: #002882;
`
const Container = styled.div`
  width: 788px;
  margin-top: 14px;
  margin-bottom: 14px;

  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid transparent;
`

const Element = styled(NavLink)`
  color: #fff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s linear;
  :hover {
    border-bottom: 3px solid #fff;
  }
`

export const Navbar: FC = () => {
  //const navigate = useNavigate();

  return (
    <NavbarContainer>
      <img src={logo} alt="vtb" width={120} />
      <Container>
        <Element to={paths.login}>Лента активности</Element>
        <Element to={paths.store}>Mагазин</Element>
        <Element to={paths.store}>Развитие</Element>
        <Element to={paths.store}>Топ-лист</Element>
        <Element to={paths.login}>Профиль</Element>
      </Container>
    </NavbarContainer>
  )
}
