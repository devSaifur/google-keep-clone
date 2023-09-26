import { Link } from 'react-router-dom'

function Title() {
  return (
    <h1 className="font-semibold">
      Google Keep, clone by{' '}
      <Link
        className="text-blue-400 underline"
        target="_blank"
        to="https://www.github.com/devSaifur"
      >
        Saifur Rahman
      </Link>
    </h1>
  )
}

export default Title
