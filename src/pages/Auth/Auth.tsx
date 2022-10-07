import { FC, memo, useState } from 'react'

import { Page } from 'ui/components'
import { styled, theme } from 'ui/styles'
import { Text } from 'ui/components/Text'
import { Register } from './components/Register'
import { Login } from './components/Login'

import logo from 'ui/images/logo.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  width: 360px;
`

const StyledLink = styled(Text)`
  cursor: pointer;

  color: ${theme.palette.blue};

  &:hover {
    text-decoration: underline;
  }
`

const _Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Page>
      <Wrapper>
        <FormWrapper>
          <img src={logo} alt="vtb" width={100} />
          <Text variant="t1" color="gray">
            {isLogin ? 'Вход в аккаунт' : 'Регистрация'}
          </Text>
          {isLogin ? <Login /> : <Register />}
          <StyledLink onClick={() => setIsLogin((prev) => !prev)} variant="t8">
            {isLogin ? 'Зарегистрироваться' : 'Войти'}
          </StyledLink>
        </FormWrapper>
      </Wrapper>
    </Page>
  )
}

export const Auth = memo(_Auth)
