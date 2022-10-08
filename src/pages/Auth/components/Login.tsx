import { paths } from 'constant'
import { FC, FormEvent, useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'shared/context/context'
import { useSendRequest } from 'shared/hooks/useSendRequest'

import { InputField, Loader } from 'ui/components'
import { PrimaryButton } from 'ui/components/PrimaryButton'
import { Text } from 'ui/components/Text'
import { styled } from 'ui/styles'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const StyledButton = styled(PrimaryButton)`
  width: 100%;
  max-width: 230px;
  margin-top: 32px;
`

export const Login: FC = () => {
  const authContext = useContext(AuthContext)!

  const [loginField, setLoginField] = useState('')
  const [passField, setPassField] = useState('')
  const navigate = useNavigate()

  const onLoginChange = useCallback((text: string) => setLoginField(text), [])
  const onPassChange = useCallback((text: string) => setPassField(text), [])

  const submitCallback = (data: any) => {
    authContext.setIsAuth(true)

    if (data) {
      authContext.setAccessToken(data['access_token'])
    }

    navigate(paths.home)
  }

  const { sendRequest, isError, isLoading, queryResult } = useSendRequest(submitCallback, 'login')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const sendObject = {
      nickname: loginField
    }

    sendRequest(sendObject)
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Form onSubmit={onSubmit}>
            <InputField onChange={onLoginChange} placeholder="vasya_pupkin" value={loginField} label="Логин" />
            <InputField onChange={onPassChange} value={passField} label="Пароль" type="password" />
            <StyledButton type="submit">Войти</StyledButton>
          </Form>
          {isError && (
            <Text variant="t4" color="red" bold>
              {queryResult}
            </Text>
          )}
        </>
      )}
    </>
  )
}
