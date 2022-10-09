import { FC, FormEvent, memo, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSendRequest } from 'shared/hooks/useSendRequest'
import { InputField, Loader } from 'ui/components'
import { PrimaryButton } from 'ui/components/PrimaryButton'
import { Text } from 'ui/components/Text'
import { styled } from 'ui/styles'
import { paths } from 'constant'
import { AuthContext } from 'shared/context/context'

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

const _Register: FC = () => {
  const authContext = useContext(AuthContext)
  const [nameField, setNameField] = useState('')
  const [surnameField, setSurnameField] = useState('')
  const [phoneField, setPhoneField] = useState('')
  const [nicknameField, setNicknameField] = useState('')
  const navigate = useNavigate()

  const submitCallback = () => {
    if (isSuccess) {
      authContext?.setIsAuth(true)
      navigate(paths.home)
    }
  }

  const { sendRequest, isError, isLoading, queryResult, isSuccess } = useSendRequest(
    submitCallback,
    'registration'
  )

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const sendObject = {
      name: nameField,
      surname: surnameField,
      phone: phoneField,
      nickname: nicknameField
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
            <InputField
              onChange={setNameField}
              placeholder="Вася"
              value={nameField}
              label="Имя"
            />
            <InputField
              onChange={setSurnameField}
              placeholder="Пупкин"
              value={surnameField}
              label="Фамилия"
            />
            <InputField
              onChange={setPhoneField}
              placeholder="+79998887766"
              value={phoneField}
              label="Номер тел."
              type="phone"
            />
            <InputField
              onChange={setNicknameField}
              placeholder="-=Vasya=-"
              value={nicknameField}
              label="Никнейм"
            />
            <StyledButton type="submit">
              <Text variant="t6">Начать!</Text>
            </StyledButton>
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

export const Register = memo(_Register)
