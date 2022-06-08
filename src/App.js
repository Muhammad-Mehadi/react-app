import "./App.css";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <div>
        <Details name={"Muhammad Mehadi"} age={"25"} />
        <Details name={"Samrat Akbar"} age={"32"} />
      </div>
    </div>
  );
}

export default App;
