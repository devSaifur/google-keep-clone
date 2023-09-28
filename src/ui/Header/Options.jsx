import {
  HiOutlineArrowPathRoundedSquare,
  HiOutlineMoon,
  HiOutlineSun
} from 'react-icons/hi2'

import { useGetNotes } from '../../features/Note/useGetNotes'
import { useDarkMode } from '../../context/useDarkMode'
import SpinnerMini from '../SpinnerMini'

function Options() {
  const { isFetching } = useGetNotes()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className="ml-auto flex items-center justify-between gap-4 px-10">
      {isFetching ? (
        <SpinnerMini />
      ) : (
        <HiOutlineArrowPathRoundedSquare size="24" />
      )}
      {isDarkMode ? (
        <HiOutlineSun
          onClick={toggleDarkMode}
          size="24"
          className="cursor-pointer"
        />
      ) : (
        <HiOutlineMoon
          onClick={toggleDarkMode}
          size="24"
          className="cursor-pointer"
        />
      )}
    </div>
  )
}

export default Options
