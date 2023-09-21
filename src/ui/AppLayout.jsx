import AppContainer from '../components/AppContainer'
import Header from './Header'
import Main from '../components/Main'
import { Outlet } from 'react-router-dom'

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
