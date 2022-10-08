import { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

import { breakpoints } from 'shared/dimensions'
import { paths } from 'constant'
import { styled } from 'ui/styles'

import { Navbar } from './Navbar'
import { Image } from './Image'

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
`

const VotLeft = styled(Image)`
  position: absolute;
  left: -100px;
  top: 170px;
  width: 200px;
  user-select: none;
  pointer-events: none;
`
const VotRight = styled(Image)`
  position: absolute;
  right: -100px;
  top: 170px;
  width: 200px;
  user-select: none;
  pointer-events: none;
`

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  return (
    <>
      <VotLeft name="vot" />
      <VotRight name="vot" />
      {location.pathname !== paths.login && <Navbar />}
      <Content>{children}</Content>
    </>
  )
}
