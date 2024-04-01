import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css";
import { Header } from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer";


function App() {
  return (
    <BrowserRouter>
        <Header title="Amor chiquito"/>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/*" element={404}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;