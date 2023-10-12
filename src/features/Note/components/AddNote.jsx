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

  const handleSubmit = (e) => {
    setIsAdding(false)
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
      className="mx-auto mb-6 flex h-auto min-w-[22rem] flex-col gap-2 rounded-xl border border-neutral-800 px-4 py-3 shadow-lg dark:border-neutral-500 sm:min-w-[36rem] lg:min-w-[40rem]"
    >
      {isAdding && (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          className="bg-neutral-300 outline-none placeholder:font-semibold placeholder:text-neutral-600 dark:bg-neutral-800 dark:placeholder:text-neutral-400"
        />
      )}
      <TextareaAutosize
        onChange={(e) => setNote(e.target.value)}
        onClick={() => setIsAdding(true)}
        value={note}
        placeholder="Take a note..."
        type="text"
        className="bg-neutral-300 font-medium outline-none placeholder:font-medium placeholder:text-neutral-600 dark:bg-neutral-800 dark:placeholder:text-neutral-400"
      />
      {isAdding && (
        <button
          onClick={() => {
            setIsAdding(false)
            handleSubmit()
          }}
          type="button"
          className="ml-auto mr-2 inline-block rounded bg-neutral-300 px-6 pb-2 pt-2 text-sm font-semibold tracking-widest transition-all hover:bg-neutral-400 dark:bg-neutral-600 dark:hover:bg-neutral-700"
        >
          Done
        </button>
      )}
    </form>
  )
}

export default AddNote
