// Write your code here
import './index.css'

const Todo = props => {
  const {todo, onDelete} = props
  const {id, title} = todo

  const onDeleteUser = () => {
    onDelete(id)
  }

  return (
    <li className="list">
      <p>{title}</p>
      <button type="button" onClick={onDeleteUser}>
        Delete
      </button>
    </li>
  )
}

export default Todo
