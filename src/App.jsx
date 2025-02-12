import "./App.css";

function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}! {props.greeting}</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}

export default App;
