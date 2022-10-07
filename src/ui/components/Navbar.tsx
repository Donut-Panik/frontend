import { FC } from 'react'

import { styled, theme } from 'ui/styles'

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <div>ВТБ</div>
      <Container>
        <div>Магазин</div>
        <div>Лента активностей</div>
        <div>Обучалка</div>
        <div>Рейтинг</div>
      </Container>
      <div></div>
    </NavbarContainer>
  )
}