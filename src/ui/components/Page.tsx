import { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

import { breakpoints } from 'shared/dimensions'
import { paths } from 'constant'
import { styled, theme } from 'ui/styles'
import { Navbar } from './Navbar'

const Content = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0;

  height: 100%;
  max-width: ${breakpoints.tablet}px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}px) {
    max-width: 100%;
  }

  background-color: ${theme.palette.main};
`

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  return (
    <>
      {location.pathname !== paths.login && <Navbar />}
      <Content>{children}</Content>
      <div id="footer"></div>
    </>
  )
}
