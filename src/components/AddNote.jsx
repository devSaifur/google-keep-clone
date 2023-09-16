import { useState } from 'react'
import EditNote from './EditNote'
import { useAddNote } from '../features/note/useAddNote'
import { useOutsideClick } from '../hooks/useOutsideClick'

function AddNote() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const { addNote } = useAddNote()
  const { ref } = useOutsideClick(handleSubmit, false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!note) return

    addNote({ title, note })
  }

  return (
    <div
      ref={ref}
      className="mx-auto flex min-w-[37rem] flex-col rounded-xl border-2 border-gray-500 p-2"
    >
      <form onSubmit={handleSubmit} className="flex max-h-28 flex-col">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          className="bg-gray-700"
        />
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Take a note..."
          type="text"
          className="bg-gray-700"
        />
      </form>

      <EditNote />
    </div>
  )
}

export default AddNote
