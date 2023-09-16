import { Search as SearchIcon } from 'lucide-react'

function Search() {
  return (
    <div className="flex items-center justify-center">
      <SearchIcon size={16} color="#fff" />
      <input placeholder="Search" />
    </div>
  )
}

export default Search
