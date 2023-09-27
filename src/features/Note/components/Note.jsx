import { useState } from 'react'
import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2'

import EditNote from './EditNote'
import { useDeleteNote } from '../useDeleteNote'

function Note({ title, note, id }) {
  const { deleteNote } = useDeleteNote()
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete = (e) => {
    e.stopPropagation()
    deleteNote(id)
  }
  const handleEdit = (e) => {
    e.stopPropagation()
    setIsEditing((isEditing) => !isEditing)
  }

  return (
    <>
      <div
        onClick={handleEdit}
        className="group/noteOptions m-2 inline-block w-full cursor-pointer gap-2 rounded-xl border-2 border-gray-500 p-2 hover:shadow-2xl"
      >
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="whitespace-pre-line">{note}</p>
        </div>
        <div className="invisible flex justify-end gap-2 px-2 transition-all group-hover/noteOptions:visible">
          <HiOutlineTrash
            onClick={handleDelete}
            size="24"
            className="cursor-pointer"
          />
          <HiOutlinePencilSquare
            onClick={handleEdit}
            size="24"
            className="cursor-pointer"
          />
        </div>
      </div>

      {isEditing && (
        <EditNote
          title={title}
          note={note}
          id={id}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </>
  )
}

export default Note
