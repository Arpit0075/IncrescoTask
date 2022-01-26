import "./App.css";
import Header from "./Component/Header";
import Section from "./Component/Section";
import Filtering from "./Component/Filtering";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <Filtering />
        <Section />
      </div>
    </div>
  );
}

export default App;
