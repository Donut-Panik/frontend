import { PropsWithChildren } from 'react'
import { breakpoints } from 'shared/dimensions'
import { styled } from 'ui/styles'
import { Navbar } from './Navbar'

const Content = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0;

  height: 100vh;
  max-width: ${breakpoints.tablet}px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}px) {
    max-width: 100%;
  }
`

export const Page: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navbar />
    <Content>{children}</Content>
    <div id="footer"></div>
  </>
)
