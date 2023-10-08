import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/ Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name="Bavly">
        <h2>This is children props</h2>
      </Greet>
      <Greet name="Dani" />
      <Greet name="Mary" />
      <Welcome name="Bavly">
        <h2>Children props for class component</h2>
      </Welcome>
      <Welcome name="Dani" />
      <Welcome name="Mary" />
      <Hello /> */}
    </div>
  );
}

export default App;
