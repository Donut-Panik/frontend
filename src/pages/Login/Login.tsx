import { FC, memo, useCallback, useState } from 'react'

import { InputField, Page } from 'ui/components'
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
  width: 100%;
  height: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 260px;
  gap: 8px;
`

const _Login: FC = () => {
  const [loginField, setLoginField] = useState('')
  const [passField, setPassField] = useState('')

  const onLoginChange = useCallback((text: string) => setLoginField(text), [])
  const onPassChange = useCallback((text: string) => setPassField(text), [])

  return (
    <Page>
      <Wrapper>
        <FormWrapper>
          <img src={logo} alt="vtb" width={100} />
          <Form>
            <InputField onChange={onLoginChange} placeholder="Логин" value={loginField} label="Логин" />
            <InputField onChange={onPassChange} placeholder="Пароль" value={passField} label="Пароль" />
          </Form>
        </FormWrapper>
      </Wrapper>
    </Page>
  )
}

export const Login = memo(_Login)
