import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Adm from 'pages/Adm';
import ListaContato from 'pages/AdmContatos/listaContato';
import CadastrarOng from 'pages/AdmOngs/cadastrarOng';
import ListaOng from 'pages/AdmOngs/listaOngs';
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
          <Route path="/cultura" element={<Cultura />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adm" element={<Adm />} />
          <Route path="/cadastrar" element={<CadastrarOng />} />
          <Route path="/listaContatos" element={<ListaContato />} />
          <Route path="/listaOngs" element={<ListaOng />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
