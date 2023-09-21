import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineMoon,
} from 'react-icons/hi2'

function Options() {
  return (
    <div className="ml-auto flex items-center justify-between gap-4 px-10">
      <HiOutlineArrowPathRoundedSquare />
      <HiOutlineMoon />
      <HiOutlineArrowLeftOnRectangle />
    </div>
  )
}

export default Options
