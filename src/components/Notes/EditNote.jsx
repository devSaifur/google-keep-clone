import { useState, useRef } from 'react'
import { clsx } from 'clsx'
import { useEditNote } from '../../features/useEditNote'
import { useOutsideClick } from '../../hooks/useOutsideClick'

function EditNote({ title, note, id, isEditing, setIsEditing }) {
  const [newTitle, setNewTitle] = useState(title)
  const [newNote, setNewNote] = useState(note)
  const { editNote } = useEditNote()
  const newNoteRef = useRef()

  useOutsideClick(newNoteRef, handleSubmit)

  function handleSubmit() {
    editNote(
      { id, editedNote: { title: newTitle, note: newNote } },
      {
        onSettled: () => {
          setIsEditing(false)
          setNewTitle('')
          setNewNote('')
        },
      }
    )
  }

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
            'h-16 visible fixed -top-32 left-0 z-20 flex h-screen w-screen items-center justify-center':
              isEditing,
          },
          { invisible: !isEditing }
        )}
      >
        <div
          ref={newNoteRef}
          className="flex min-w-[37rem] flex-col gap-2 rounded-lg border-2 border-gray-500 bg-gray-700 shadow-2xl"
        >
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            className="rounded-t-lg bg-gray-700 p-2"
            type="text"
            placeholder="Title"
            value={newTitle}
          />
          <textarea
            onChange={(e) => setNewNote(e.target.value)}
            className="rounded-b-lg bg-gray-700 p-2"
            cols="30"
            rows="10"
            value={newNote}
          >
            {note}
          </textarea>
        </div>
      </div>
    </>
  )
}

export default EditNote
