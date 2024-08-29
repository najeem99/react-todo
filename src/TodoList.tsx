
export default function TodoList({ todoList, onDelete, onEdit, editMode }: {todoList: string[]}) {
  return (
    <ul className=" w-100 border rounded mt-3">

      {todoList.map((val: string, index: number) => {

        return <ul className="border-t first:border-t-0 flex py-1  items-center" key={index}>
          <div className="w-80 p-2">{val} </div>
          <button
            className={`mx-2 h-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded  ${editMode ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            onClick={() => onEdit(index)} disabled={editMode}>Edit</button>
          <button
            className={`mx-2 h-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded  ${editMode ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            onClick={() => onDelete(index)} disabled={editMode}>Delete</button>
        </ul>
      })}
    </ul>
  )
}
