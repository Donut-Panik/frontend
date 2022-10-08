import { createContext, FC, PropsWithChildren, useCallback, useState } from 'react'

type LogInContextProps = {
  isAuth: boolean
  token: string
  setIsAuth: (i: boolean) => void
  setAccessToken: (token: string) => void
  clearAll: () => void
}

export const AuthContext = createContext<LogInContextProps>({} as LogInContextProps)

export const LogInProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState('')

  const setAuth = useCallback((i: boolean) => setIsAuth(i), [setIsAuth])

  const clearAll = useCallback(() => {
    setToken('')
    localStorage.clear()
    setIsAuth(false)
  }, [])

  const setTokenAccess = (token: string) => {
    setToken(token)
    window.localStorage.setItem('access_token', token)
  }

  return (
    <AuthContext.Provider
      value={{ isAuth, token, setIsAuth: setAuth, setAccessToken: setTokenAccess, clearAll: clearAll }}
    >
      {children}
    </AuthContext.Provider>
  )
}
