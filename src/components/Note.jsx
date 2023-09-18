import { useState } from 'react'
import { Archive, Trash2 } from 'lucide-react'
import { useDeleteNote } from '../features/note/useDeleteNote'
import EditNote from './EditNote'

function Note({ title, note, id }) {
  const [isEditing, setIsEditing] = useState(false)
  const { deleteNote } = useDeleteNote()

  if (!isEditing) {
    return (
      <>
        <div className="flex max-h-24 w-[17rem] flex-col gap-2 rounded-xl border-2 border-gray-500 p-2">
          <div onClick={() => setIsEditing(true)}>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{note}</p>
          </div>
          <div className="ml-auto mr-0 flex gap-2">
            <Archive />
            <Trash2 onClick={() => deleteNote(id)} />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <EditNote title={title} note={note} id={id} setIsEditing={setIsEditing} />
    )
  }
}

export default Note
