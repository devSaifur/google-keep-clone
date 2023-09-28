import AppContainer from './ui/AppContainer'
import Header from './ui/Header/Header'
import Main from './ui/Main'
import AddNote from './features/Note/components/AddNote'
import Notes from './features/Note/components/Notes'
import MadeWith from './ui/MadeWith'

function App() {
  return (
    <AppContainer>
      <Header />

      <Main>
        <AddNote />
        <Notes />
      </Main>

      <MadeWith />
    </AppContainer>
  )
}

export default App
