import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Parceiros from 'pages/Parceiros';
import Cultura from 'pages/Cultura';
import Contato from 'pages/Contato';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Login from 'pages/Login';

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
