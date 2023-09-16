import AppContainer from '../components/AppContainer'
import Header from './Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar/Sidebar'
import Notes from '../components/Notes'
import AddNote from '../components/AddNote'

function AppLayout() {
  return (
    <AppContainer>
      <Header />
      <div className="flex">
        <Sidebar />
        <Main>
          <AddNote />
          <Notes />
        </Main>
      </div>
    </AppContainer>
  )
}

export default AppLayout
