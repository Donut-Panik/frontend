import { useRoutes } from 'react-router'

import { paths } from 'constant/pages'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'

export const RootRouter: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: paths.home,
      element: <Home />
    },
    {
      path: paths.login,
      element: <Login />
    }
  ])
  return <>{routes}</>
}