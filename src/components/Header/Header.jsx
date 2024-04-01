import "./Header.css";

export const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
    </div>
  );
};