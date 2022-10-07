import { useRoutes } from 'react-router'

import { paths } from 'constant/pages'
import { Home } from 'pages/Home'
import { Auth } from 'pages/Auth'
import { Store } from 'pages/Store/Store'

export const RootRouter: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: paths.home,
      element: <Home />
    },
    {
      path: paths.login,
      element: <Auth />
    },
    {
      path: paths.store,
      element: <Store />
    }
  ])
  return <>{routes}</>
}
