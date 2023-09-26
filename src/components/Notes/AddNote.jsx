import { useState, useRef } from 'react'
import { useAddNote } from '../../features/useAddNote'
import { useOutsideClick } from '../../hooks/useOutsideClick'

function AddNote() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const { addNote } = useAddNote()
  const formRef = useRef()
  useOutsideClick(formRef, handleSubmit)
  useOutsideClick(formRef, () => setIsAdding(false))

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
      className="mx-auto mb-6 flex h-auto min-w-[40rem] flex-col gap-2 rounded-xl border-2 border-gray-500 px-4 py-2 shadow-lg"
    >
      {isAdding && (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          className="bg-gray-700 outline-none"
        />
      )}
      <textarea
        onChange={(e) => setNote(e.target.value)}
        onClick={() => setIsAdding(true)}
        placeholder="Take a note..."
        type="text"
        className="bg-gray-700 font-medium outline-none"
      >
        {note}
      </textarea>
    </form>
  )
}

export default AddNote
