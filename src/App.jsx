import AddNote from './features/Note/components/AddNote'
import Notes from './features/Note/components/Notes'
import AppContainer from './ui/AppContainer'
import Header from './ui/Header/Header'
import Main from './ui/Main'

function App() {
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

export default App
