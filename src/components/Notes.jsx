import { useGetNotes } from '../features/note/useGetNotes'

function Notes() {
  const { notes } = useGetNotes()

  return (
    <div className="flex px-10 py-8">
      {notes?.map((note) => (
        <div
          key={note.id}
          className="flex max-h-24 w-[17rem] flex-col gap-2 rounded-xl border-2 border-gray-500 p-2"
        >
          <h2 className="text-lg font-semibold">{note.title}</h2>
          <p>{note.note}</p>
        </div>
      ))}
    </div>
  )
}

export default Notes
