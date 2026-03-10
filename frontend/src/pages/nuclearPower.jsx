import IndiaMap from "../components/indiaMap";
import { nuclearPlants } from "../data/nuclear";
import Navbar from "../components/navbar";

function App() {

  return (
    <div className="p-4 flex">
    <div className="bout w-[40vw] rounded-lg bg-gray-100"></div>
      <IndiaMap mode="marker" markers={nuclearPlants} />
      <Navbar></Navbar>
    </div>
  );
}

export default App;