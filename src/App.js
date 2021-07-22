import './App.css';
import { useGlobalContext } from "./context";
import { SingleDay } from './components/SingleDay/SingleDay';

function App() {

  const data = useGlobalContext();
  console.log(data)
  return (
    <div className="App">
      <SingleDay />
    </div>
  );
}

export default App;
