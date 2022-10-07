import { createContext, FC, PropsWithChildren, useCallback, useState } from 'react'

type LogInContextProps = {
    isAuth: boolean
    setAuthId: (i: boolean) => void
  }
  
  export const AuthContext = createContext<LogInContextProps | null>(null)
  
  export const LogInProvider: FC<PropsWithChildren> = ({children}) => {
    const [isAuth, setAuthId] = useState(false)
  
    const setAuth = useCallback((i:boolean) => setAuthId(i), [setAuthId])
  
    return (
      <AuthContext.Provider value={{isAuth, setAuthId: setAuth}}>
        {children}
      </AuthContext.Provider>
    )
  }