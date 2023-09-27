import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase'

function useAddNote() {
  const queryClient = useQueryClient()
  const { mutate: addNote, isLoading: isLoadingAddNote } = useMutation({
    mutationFn: async (newNote) => {
      await addDoc(collection(db, 'notes'), newNote)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['notes'])
    },
    onError: (err) => {
      console.error(err.message)
    }
  })
  return { addNote, isLoadingAddNote }
}

export { useAddNote }
