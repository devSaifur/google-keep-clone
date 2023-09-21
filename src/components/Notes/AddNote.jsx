import { useState, useRef } from 'react'
import { useAddNote } from '../../features/useAddNote'
import { useOutsideClick } from '../../hooks/useOutsideClick'

function AddNote() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const { addNote } = useAddNote()
  const formRef = useRef()
  useOutsideClick(formRef, handleSubmit)

  function handleSubmit() {
    if (!note) return

    addNote(
      { title, note },
      {
        onSuccess: () => {
          setTitle('')
          setNote('')
          formRef.current.reset()
        },
      }
    )
  }

  return (
    <form
      ref={formRef}
      className="mx-auto flex max-w-xl flex-col rounded-xl border-2 border-gray-500"
    >
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
  )
}

export default AddNote
