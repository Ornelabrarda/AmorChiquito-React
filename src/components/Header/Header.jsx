import "./Header.css";

export const Header = (props) => {
  return (
    <div className="Header" style={{ color: "rgb(252, 248, 232)" }}>
      <h1>{props.title}</h1>
    </div>
  );
};
