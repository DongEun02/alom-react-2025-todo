import "./TodoItem.css";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todoItem">
      {todo}
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default TodoItem;
