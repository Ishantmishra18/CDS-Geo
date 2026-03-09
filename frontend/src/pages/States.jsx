import IndiaMap from "../components/indiaMap";

function App() {

  const handleStateClick = (state) => {
    alert(state);
  };

  return (
    <div className="p-10">
      <IndiaMap mode="state" onStateClick={handleStateClick} />
    </div>
  );
}

export default App;