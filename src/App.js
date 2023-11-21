import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Search from "./pages/Search";
import Layout from "./components/Layout";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} index />
          <Route element={<Item />} path="item/:id" />
          <Route element={<Search />} path="search" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
