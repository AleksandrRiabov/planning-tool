import './App.css';
import { useGlobalContext } from "./context";
import { SingleDay } from './components/SingleDay/SingleDay';
import MainTable from "./components/MainTable/MainTable";
function App() {

  const data = useGlobalContext();
  console.log(data)
  return (
    <div className="App">
      <MainTable />
    </div>
  );
}

export default App;
