import { Card } from "./components/Card";
import { createLocalStorage, getAllStorage } from "./services/storage";

if (!getAllStorage()) {
  createLocalStorage();
}


function App() {

  return (
    <Card />
  )
}

export default App
