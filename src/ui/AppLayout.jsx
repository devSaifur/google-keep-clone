import { Outlet } from 'react-router-dom'
import AppContainer from '../components/AppContainer'
import Header from './Header'
import Main from '../components/Main'

function AppLayout() {
  return (
    <AppContainer>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </AppContainer>
  )
}

export default AppLayout
