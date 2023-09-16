import { useMutation } from '@tanstack/react-query'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../../services/firebase'

function useAddNote() {
  const { mutate: addNote, isLoading: isLoadingAddNote } = useMutation({
    mutationKey: ['addNote'],
    mutationFn: async (newNote) => {
      await addDoc(collection(db, 'notes'), newNote)
    },
    onSuccess: (err) => {
      console.error(err.message)
    },
  })
  return { addNote, isLoadingAddNote }
}

export { useAddNote }
