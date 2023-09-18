import { useGetNotes } from '../features/note/useGetNotes'
import Note from './Note'

function Notes() {
  const { notes } = useGetNotes()

  return (
    <div className="flex gap-2 px-10 py-8">
      {notes?.map((note) => (
        <Note title={note.title} note={note.note} id={note.id} key={note.id} />
      ))}
    </div>
  )
}

export default Notes
