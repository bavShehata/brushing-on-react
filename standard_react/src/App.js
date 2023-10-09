import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ClassEventBind from "./components/ClassEventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import PureComp from "./components/PureComp";
import RegComp from "./components/RegComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";

function App() {
  return (
    <div className="App">
      <PortalDemo />
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp/> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Stylesheet primary={true} />
      <Inline /> */}
      {/* <Counter /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <ClassEventBind /> */}
      {/* <ParentComponent /> */}
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
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
    </div>
  );
}

export default App;
