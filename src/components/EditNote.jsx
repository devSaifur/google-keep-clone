function EditNote({ title, note, id, isEditing }) {
  return (
    <div className="fixed inset-0 z-30 h-screen w-full blur-lg backdrop-blur-lg">
      <div
        className={`${
          isEditing
            ? 'invisible'
            : 'h-16 visible absolute z-50 flex min-w-[37rem] flex-col border-2 border-gray-500 bg-gray-700 shadow-2xl'
        }`}
      >
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
    </div>
  )
}

export default EditNote
