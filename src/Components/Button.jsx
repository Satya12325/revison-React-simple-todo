import style from "./styles.module.css";

const Button = ({ title, onAdd }) => {
  return (
    <button
      className={style.button}
      onClick={onAdd}
      style={{
        height: "45px",
        width: "45px",
        border: "2px solid black",
        borderRadius: "5px",
        fontSize: "15px",
        marginLeft: "15px"
      }}
    >
      {title}
    </button>
  );
};
export default Button;
