import { HiOutlineArrowPathRoundedSquare, HiOutlineMoon } from 'react-icons/hi2'
import { useGetNotes } from '../../features/Note/useGetNotes'
import SpinnerMini from '../SpinnerMini'

function Options() {
  const { isFetching } = useGetNotes()

  return (
    <div className="ml-auto flex items-center justify-between gap-4 px-10">
      {isFetching ? (
        <SpinnerMini />
      ) : (
        <HiOutlineArrowPathRoundedSquare size="24" />
      )}
      <HiOutlineMoon size="24" />
    </div>
  )
}

export default Options
