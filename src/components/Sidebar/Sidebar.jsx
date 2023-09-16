import { NavLink } from 'react-router-dom'
import { Lightbulb, Archive, Trash2 } from 'lucide-react'

function Sidebar() {
  return (
    <nav>
      <ul className="mt-10 flex h-screen w-1/5 flex-col gap-8">
        <li>
          <NavLink className="flex" to="/home">
            <span>
              <Lightbulb />
            </span>{' '}
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink className="flex" to="/archive">
            <span>
              <Archive />
            </span>{' '}
            Archive
          </NavLink>
        </li>
        <li>
          <NavLink className="flex" to="/trash">
            <span>
              <Trash2 />
            </span>
            Trash
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
