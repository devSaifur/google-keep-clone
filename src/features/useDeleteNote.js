import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase'

function useDeleteNote() {
  const queryClient = useQueryClient()

  const { mutate: deleteNote, isLoading: isDeletingNote } = useMutation({
    mutationFn: async (id) => {
      await deleteDoc(doc(db, 'notes', id))
    },
    onSuccess: () => {
      console.log('Note deleted successfully')
      queryClient.invalidateQueries(['notes'])
    },
    onError: (err) => {
      console.error(err.message)
    },
  })

  return { deleteNote, isDeletingNote }
}

export { useDeleteNote }
