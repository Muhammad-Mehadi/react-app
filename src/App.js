import "./App.css";
import Details from "./components/Details";

function App() {
  const details = [
    {
      name: "Mehadi",
      age: 25,
    },
    {
      name: "Mithu",
      age: 23,
    },
  ];

  return (
    <div className="App">
      <div>
        {details.map((detail) => (
          <Details details={detail} />
        ))}
      </div>
    </div>
  );
}

export default App;
