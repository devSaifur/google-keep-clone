import moment from 'moment'

import { useGetNotes } from '../useGetNotes'
import Note from './Note'

function Notes() {
  const { notes } = useGetNotes()

  const sortedNotes = notes?.sort((a, b) =>
    moment(b.created).diff(moment(a.created))
  )

  return (
    <div className="columns-1 sm:columns-2 md:columns-4 lg:columns-6">
      {sortedNotes?.map((note) => (
        <Note title={note.title} note={note.note} id={note.id} key={note.id} />
      ))}
    </div>
  )
}

export default Notes
