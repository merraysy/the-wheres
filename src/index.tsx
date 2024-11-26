import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import './index.css'
import App from './App.tsx'

const client = new ApolloClient({
  uri: 'https://graphql.country/graphql',
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
