import { useRoutes } from 'react-router'

import { paths } from 'constant/pages'
import { Home } from 'pages/Home'
import { Auth } from 'pages/Auth'
import { Challenges } from 'pages/Сhallenges/Challenges'
import { Profile } from 'pages/Profile'
import { Education } from 'pages/Education'
import { Rating } from 'pages/Rating'
import { Shop } from 'pages/Shop'

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
      path: paths.education,
      element: <Education />
    },
    {
      path: paths.challenges,
      element: <Challenges />
    },
    {
      path: paths.profile,
      element: <Profile />
    },
    {
      path: paths.rating,
      element: <Rating />
    },
    {
      path: paths.store,
      element: <Shop />
    }
  ])
  return <>{routes}</>
}
