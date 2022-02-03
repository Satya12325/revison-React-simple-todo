import style from "./styles.module.css";

const TodoItem = ({ id, status, title, handleToggle }) => {
  if (status === true) {
    var Style = {
      border: "7px solid green"
    };
  }

  return (
    <div className={style.cards}>
      <div>{title}</div>
      <button
        className={style.tooglebutton}
        style={Style}
        onClick={() => handleToggle(id)}
      ></button>
    </div>
  );
};
export default TodoItem;
