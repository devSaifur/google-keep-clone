import { useState, useRef } from 'react'
import { useAddNote } from '../useAddNote'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import TextareaAutosize from 'react-textarea-autosize'

function AddNote() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const formRef = useRef()
  const { addNote } = useAddNote()

  useOutsideClick(formRef, () => setIsAdding(false))

  const handleSubmit = () => {
    if (!note) return

    addNote(
      { title, note },
      {
        onSuccess: () => {
          setTitle('')
          setNote('')
          formRef.current.reset()
        }
      }
    )
  }

  useOutsideClick(formRef, handleSubmit)

  return (
    <form
      ref={formRef}
      className="mx-auto mb-6 flex h-auto min-w-[40rem] flex-col gap-2 rounded-xl border-2 border-gray-500 px-4 py-3 shadow-lg"
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
      <TextareaAutosize
        onChange={(e) => setNote(e.target.value)}
        onClick={() => setIsAdding(true)}
        value={note}
        placeholder="Take a note..."
        type="text"
        className="bg-gray-700 font-medium outline-none"
      />
      {isAdding && (
        <button
          onClick={() => {
            setIsAdding(false)
            handleSubmit()
          }}
          type="button"
          className="ml-auto mr-2 inline-block rounded bg-gray-600 px-6 pb-2 pt-2 text-sm font-semibold tracking-widest transition-all hover:bg-gray-800"
        >
          Done
        </button>
      )}
    </form>
  )
}

export default AddNote
