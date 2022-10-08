import { ReactElement, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RootRouter } from 'routes/routes'
import { paths } from 'constant'
import { Auth } from 'pages/Auth'

import { AuthContext } from 'shared/context/context'

export const App = () => {
  const { isAuth } = useContext(AuthContext)

  const privateOutlet = (children: ReactElement<any>) => {
    if (!isAuth && window.location.pathname !== paths.login) {
      window.location.pathname = paths.login
    }
    return !isAuth ? <Auth /> : children
  }

  return <Router>{privateOutlet(<RootRouter />)}</Router>
}
