import { useState, useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { useEditNote } from '../useEditNote'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import Overlay from '../../../ui/Overlay'

function EditNote({ title, note, id, isEditing, setIsEditing }) {
  const [newTitle, setNewTitle] = useState(title)
  const [newNote, setNewNote] = useState(note)
  const { editNote } = useEditNote()
  const newNoteRef = useRef()

  const handleSubmit = (e) => {
    setIsEditing(false)
    setNewTitle('')
    setNewNote('')

    setIsEditing(false)

    if (!newTitle || !newNote || (newNote === note && newTitle === title)) {
      return
    } else {
      editNote({ id, editedNote: { title: newTitle, note: newNote } })
    }
  }

  useOutsideClick(newNoteRef, handleSubmit)

  return (
    <>
      {isEditing && <Overlay />}

      {isEditing && (
        <div className="fixed -top-32 left-0 z-20 flex h-screen w-screen items-center justify-center">
          <form
            ref={newNoteRef}
            className="flex min-w-[22.5rem] flex-col gap-2 rounded-xl border border-neutral-800 bg-neutral-300 p-4 shadow-secondary dark:border-neutral-500 dark:bg-neutral-800 sm:min-w-[32rem] lg:min-w-[38rem]"
          >
            <input
              onChange={(e) => setNewTitle(e.target.value)}
              className="rounded-t-lg bg-neutral-300 p-2 text-xl font-bold outline-none dark:bg-neutral-800"
              type="text"
              placeholder="Title"
              value={newTitle}
            />
            <TextareaAutosize
              onChange={(e) => setNewNote(e.target.value)}
              className="whitespace-nowrap rounded-b-lg bg-gray-300 p-2 outline-none dark:bg-neutral-800"
              cols="30"
              rows="10"
              value={newNote}
            />

            <button
              onClick={handleSubmit}
              type="button"
              className="ml-auto mr-2 inline-block rounded px-6 pb-2 pt-2 text-sm font-semibold tracking-widest transition-all hover:bg-neutral-400 dark:bg-neutral-600 dark:hover:bg-neutral-700"
            >
              Close
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default EditNote
