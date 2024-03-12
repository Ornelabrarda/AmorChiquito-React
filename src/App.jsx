import "../src/App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";


function App() {
  return (
      <div className="App">
        <Header title="Amor chiquito"/>
        <NavBar/>
        <ItemListContainer subtitle="Greetings for everybody!"/>
      </div>
  )
}

export default App
