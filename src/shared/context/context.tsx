import { createContext, FC, PropsWithChildren, useCallback, useState } from 'react'

type LogInContextProps = {
  isAuth: boolean
  setIsAuth: (i: boolean) => void
}

export const AuthContext = createContext<LogInContextProps | null>(null)

export const LogInProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const setAuth = useCallback((i: boolean) => setIsAuth(i), [setIsAuth])

  return <AuthContext.Provider value={{ isAuth, setIsAuth: setAuth }}>{children}</AuthContext.Provider>
}
