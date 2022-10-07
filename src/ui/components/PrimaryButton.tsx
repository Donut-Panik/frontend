import { FC, PropsWithChildren } from 'react'

import { styled, theme } from 'ui/styles'

import { Button } from './Button'

const StyledButton = styled(Button)`
  border: 2px solid ${theme.palette.blue};
  border-radius: 32px;
  min-height: 40px;
  background-color: #ffffff;
  transition: all ${theme.transition.hover}ms;

  &:hover {
    background-color: ${theme.palette.blue};
    color: white;
  }
`

export type ButtonProps = {
  className?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: (ev: React.MouseEvent) => void
}

export const PrimaryButton: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)
