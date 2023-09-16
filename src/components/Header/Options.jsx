import { RotateCw, Rows, Moon, LogOut } from 'lucide-react'

function Options() {
  return (
    <div className="ml-auto flex items-center justify-between gap-4 px-10">
      <RotateCw color="#fff" />
      <Rows color="#fff" />
      <Moon color="#fff" />
      <LogOut color="#fff" />
    </div>
  )
}

export default Options
