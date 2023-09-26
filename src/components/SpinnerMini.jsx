function SpinnerMini() {
  return (
    <div
      className="h-5 inline-block w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_2.5s_linear_infinite]"
      role="status"
    ></div>
  )
}

export default SpinnerMini
