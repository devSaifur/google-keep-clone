import { useMutation, useQueryClient } from "@tanstack/react-query"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

function useEditNote() {
  const queryClient = useQueryClient()
  const { mutate: editNote, isLoading: isEditingNote } = useMutation({
    mutationFn: ({ id, editedNote }) => tryEditNote(id, editedNote),
    onSuccess: () => {
      console.log("Note edited successfully")
      queryClient.invalidateQueries(["notes"])
    },
    onError: (err) => {
      console.error(err.message)
    },
  })

  return { editNote, isEditingNote }
}

async function tryEditNote(id, editedNote) {
  try {
    await updateDoc(doc(db, "notes", id), editedNote)
  } catch (err) {
    console.error(err.message)
  }
}

export { useEditNote }
