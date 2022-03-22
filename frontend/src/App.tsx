import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Contato from 'pages/Contato';
import Cultura from 'pages/Cultura';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Parceiros from 'pages/Parceiros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cultura" element={<Cultura />} />
          <Route path="/Parceiros" element={<Parceiros />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
