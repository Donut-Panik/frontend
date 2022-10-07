import { FC, memo } from 'react'

import { getStyles, styled, theme } from 'ui/styles'
import { Text } from './Text'

const Wrapper = styled.div`
  display: flex;
`

const Input = styled.input<{ isValid: boolean; isNotEmpty: boolean }>`
  display: inline-flex;
  ${getStyles('t8')}
  align-self: start;
  border-radius: 8px;
  border: 1px solid
    ${({ isValid, isNotEmpty }) =>
      isValid ? (isNotEmpty ? theme.palette.black : theme.palette.black) : theme.palette.black};
  width: 100%;
  min-height: 32px;
  padding: 8px 16px 8px 16px;
  color: ${theme.palette.black};
  box-sizing: border-box;

  transition-property: color, border, box-shadow;
  transition-duration: ${theme.transition.hover}ms;

  &::placeholder {
    color: ${theme.palette.black};
  }

  @media (hover: hover) {
    &:hover {
      border: 1px solid white;
      box-shadow: 0 0 0px 1px ${theme.palette.black}, 0px 4px 5px rgba(0, 0, 0, 0.15);

      &:focus,
      &:active,
      &:target {
        border: 1px solid white;
      }
    }

    &:focus,
    &:active,
    &:target {
      border: 1px solid ${theme.palette.black};
    }
  }

  &:focus,
  &:active,
  &:target {
    border: 1px solid ${theme.palette.black};
  }
`

type InputProps = {
  value: string
  label?: string
  isValid?: boolean
  placeholder?: string
  onChange: (text: string) => void
}

const _InputField: FC<InputProps> = ({ value, label, isValid, placeholder, onChange }) => {
  const isNotEmpty = Boolean(value)

  return (
    <Wrapper>
      {label && <Text variant="t4">{label}</Text>}
      <Input
        onChange={(e) => onChange(e.target.value)}
        isValid={!!isValid}
        placeholder={placeholder}
        isNotEmpty={isNotEmpty}
      />
    </Wrapper>
  )
}

export const InputField = memo(_InputField)
