import { Route, Routes } from 'react-router'
import routes from '@/routes'
import { Main } from '@/pages/main'
import { CountryDetails } from './pages/country-details'

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />}>
        <Route path={routes.country()} Component={CountryDetails} />
      </Route>
    </Routes>
  )
}

export default App
