import { lazy, Suspense } from 'react'
import AppContainer from './ui/AppContainer'

const Header = lazy(() => import('./ui/Header/Header'))
const Main = lazy(() => import('./ui/Main'))
const AddNote = lazy(() => import('./features/Note/components/AddNote'))
const Notes = lazy(() => import('./features/Note/components/Notes'))
const MadeWith = lazy(() => import('./ui/MadeWith'))

function App() {
  return (
    <AppContainer>
      <Suspense>
        <Header />

        <Main>
          <AddNote />
          <Notes />
        </Main>

        <MadeWith />
      </Suspense>
    </AppContainer>
  )
}

export default App
