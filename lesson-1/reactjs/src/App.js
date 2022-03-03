import "./App.css";

const Message = (props) => {
  return (
    <div className="App">
      <header>{props.text}</header>
    </div>
  );
};

export function App() {
  return <Message text="Урок 1. Знакомство с ReactJS. Первые компоненты" />;
}
