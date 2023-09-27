import AddNote from '../features/Note/components/AddNote'
import Notes from '../features/Note/components/Notes'
import AppContainer from './AppContainer'
import Header from './Header/Header'
import Main from './Main'

function AppLayout() {
  return (
    <AppContainer>
      <Header />

      <Main>
        <AddNote />
        <Notes />
      </Main>
    </AppContainer>
  )
}

export default AppLayout
