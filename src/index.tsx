import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'reset-css'

import { GlobalStyles, theme, ThemeProvider } from 'ui/styles'
import { App } from 'App'

const root = createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </QueryClientProvider>
)
