import React from 'react'
import { StyledComponent } from 'styled-components'

import { styled, Theme } from 'ui/styles'

type Props = {
  name: string
  color?: string
  inline?: boolean
  width?: number
  height?: number
}

type StyledFunc = (props: Props) => JSX.Element
type IconT = StyledComponent<StyledFunc, Theme, Props>

export const Icon: IconT = styled<StyledFunc>(({ name, color, ...rest }) => {
  let content = require(`ui/icons/${name}.svg`).default
  if (color) content = content.replace(/#B8BCCC/g, color)
  return <div dangerouslySetInnerHTML={{ __html: content }} {...rest}></div>
})<Props>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  svg {
    display: block;
    ${({ width }) => width && `width: ${width}px;`}
    ${({ height }) => height && `height: ${height}px;`}
  }
`