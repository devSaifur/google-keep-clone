import { useState } from 'react'
import EditNote from './EditNote'
import { HiOutlineTrash } from 'react-icons/hi2'
import { useDeleteNote } from '../../features/useDeleteNote'

function Note({ title, note, id }) {
  const { deleteNote } = useDeleteNote()
  const [isEditing, setIsEditing] = useState(false)

  function handleDelete(e) {
    e.stopPropagation()
    deleteNote(id)
  }

  if (!isEditing) {
    return (
      <>
        <div
          onClick={() => setIsEditing((isEditing) => !isEditing)}
          className="group/deleteBtn m-2 flex w-64 cursor-pointer flex-col gap-2 rounded-xl border-2 border-gray-500 p-2 transition-all hover:shadow-2xl"
        >
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{note}</p>
          </div>
          <div className="invisible ml-auto mr-2 flex items-center gap-2 transition-all group-hover/deleteBtn:visible">
            <HiOutlineTrash
              onClick={handleDelete}
              size="24"
              className="cursor-pointer"
            />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <EditNote
        title={title}
        note={note}
        id={id}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    )
  }
}

export default Note
