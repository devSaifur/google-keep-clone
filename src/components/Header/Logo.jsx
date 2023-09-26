import Title from './Title'

function Logo() {
  return (
    <div className="flex items-center gap-2 pr-16">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 370.86 509.93"
        className="h-10 w-10"
      >
        <defs>
          <style>
            {`.cls-1{fill:#ffba00;}.cls-2{fill:#ff9500;}.cls-3{fill:#fff;}`}
          </style>
        </defs>
        <title>google-keep</title>
        <path
          className="cls-1"
          d="M336.09,509.93H34.77A34.72,34.72,0,0,1,0,475.16V34.77A34.72,34.72,0,0,1,34.77,0H243.38L370.86,127.48V475.16A34.72,34.72,0,0,1,336.09,509.93Z"
        />
        <path className="cls-2" d="M243.38,0,370.86,127.48H243.38Z" />
        <path className="cls-3" d="M226,341.88H144.87v29H226Z" />
        <path
          className="cls-3"
          d="M185.43,173.84a75.31,75.31,0,0,0-40.1,139.07h80a75.31,75.31,0,0,0-40.1-139.07Z"
        />
      </svg>

      <Title />
    </div>
  )
}

export default Logo
