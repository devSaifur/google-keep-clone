import { useGetNotes } from '../useGetNotes'
import Note from './Note'

function Notes() {
  const { notes } = useGetNotes()

  return (
    <div className="columns-1 sm:columns-2 md:columns-4 lg:columns-6">
      {notes?.map((note) => (
        <Note title={note.title} note={note.note} id={note.id} key={note.id} />
      ))}
    </div>
  )
}

export default Notes
