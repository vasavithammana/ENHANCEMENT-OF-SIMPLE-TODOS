// Write your code here
const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-container">
      <p>{title}</p>
      <button className="btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
