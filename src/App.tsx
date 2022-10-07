import { BrowserRouter as Router } from 'react-router-dom'

import { RootRouter } from 'routes/routes'

import { Home } from './pages/Home'

// todo react-router
export const App = () => (
  <Router>
    <RootRouter />
  </Router>
)