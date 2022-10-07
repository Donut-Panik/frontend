import { FC, memo, useCallback, useState } from 'react'

import { Button, InputField, Page } from 'ui/components'
import { styled } from 'ui/styles'

import logo from 'ui/images/logo.png'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  height: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  gap: 8px;
`

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 230px;
  margin-top: 32px;
`

const _Login: FC = () => {
  const [loginField, setLoginField] = useState('')
  const [passField, setPassField] = useState('')

  const onLoginChange = useCallback((text: string) => setLoginField(text), [])
  const onPassChange = useCallback((text: string) => setPassField(text), [])

  const onSubmit = () => {}

  return (
    <Page>
      <Wrapper>
        <FormWrapper>
          <img src={logo} alt="vtb" width={100} />
          <Form onSubmit={onSubmit}>
            <InputField onChange={onLoginChange} placeholder="vasya_pupkin" value={loginField} label="Логин" />
            <InputField onChange={onPassChange} value={passField} label="Пароль" type="password" />
            <StyledButton type="submit">Войти</StyledButton>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Page>
  )
}

export const Login = memo(_Login)
