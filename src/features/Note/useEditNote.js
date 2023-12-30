import { useMutation, useQueryClient } from '@tanstack/react-query'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

function useEditNote() {
  const queryClient = useQueryClient()
  const { isLoading: isEditingNote, mutate: editNote } = useMutation({
    mutationFn: ({ id, editedNote }) => tryEditNote(id, editedNote),
    onSuccess: () => {
      queryClient.invalidateQueries(['notes'])
    },
    onError: (err) => {
      console.error(err.message)
    }
  })

  return { editNote, isEditingNote }
}

async function tryEditNote(id, editedNote) {
  try {
    await updateDoc(doc(db, 'notes', id), editedNote)
  } catch (err) {
    console.error(err.message)
  }
}

export { useEditNote }
