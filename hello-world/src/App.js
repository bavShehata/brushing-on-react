import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/ Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ClassEventBind from "./components/ClassEventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <ClassEventBind /> */}
      <ParentComponent />
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
      {/* <Greet name="Dani" superHero="antMan" />
      <Welcome name="Dani" superHero="antMan" /> */}
    </div>
  );
}

export default App;
