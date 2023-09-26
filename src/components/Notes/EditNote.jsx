import { useState, useRef } from 'react'
import { clsx } from 'clsx'

import { useEditNote } from '../../features/useEditNote'
import { useOutsideClick } from '../../hooks/useOutsideClick'

function EditNote({ title, note, id, isEditing, setIsEditing }) {
  const [newTitle, setNewTitle] = useState(title)
  const [newNote, setNewNote] = useState(note)
  const { editNote } = useEditNote()
  const newNoteRef = useRef()

  const handleSubmit = () => {
    setIsEditing(false)

    if (!newTitle || !newNote || (newNote === note && newTitle === title)) {
      return
    } else {
      editNote(
        { id, editedNote: { title: newTitle, note: newNote } },
        {
          onSettled: () => {
            setNewTitle('')
            setNewNote('')
          },
        }
      )
    }
  }

  useOutsideClick(newNoteRef, handleSubmit)

  return (
    <>
      <div
        //overlay
        className={clsx({
          'fixed inset-0 z-10 h-screen w-full opacity-50 blur-md backdrop-blur-md':
            isEditing,
        })}
      ></div>

      <div
        className={clsx(
          {
            'visible fixed -top-32 left-0 z-20 flex h-screen w-screen items-center justify-center transition-all':
              isEditing,
          },
          { 'invisible h-0': !isEditing }
        )}
      >
        <div
          ref={newNoteRef}
          className="flex min-w-[37rem] flex-col gap-2 rounded-xl border-2 border-gray-500 bg-gray-700 p-4 shadow-2xl"
        >
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            className="rounded-t-lg bg-gray-700 p-2 text-xl font-bold outline-none"
            type="text"
            placeholder="Title"
            value={newTitle}
          />
          <textarea
            onChange={(e) => setNewNote(e.target.value)}
            id="textarea"
            className="whitespace-nowrap rounded-b-lg bg-gray-700 p-2 outline-none"
            cols="30"
            rows="10"
            value={newNote}
          >
            {note}
          </textarea>
          <button
            onClick={handleSubmit}
            type="button"
            className="ml-auto mr-2 inline-block rounded bg-gray-600 px-6 pb-2 pt-2 text-sm font-semibold tracking-widest transition-all hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}

export default EditNote
