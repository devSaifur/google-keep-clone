import { useQuery } from '@tanstack/react-query'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'

function useGetNotes() {
  const {
    isLoading: isLoadingNotes,
    error,
    data: notes,
  } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const data = await getDocs(collection(db, 'notes'))
      const notesData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      return notesData
    },
  })

  return { isLoadingNotes, error, notes }
}

export { useGetNotes }
