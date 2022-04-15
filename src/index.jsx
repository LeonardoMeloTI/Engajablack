import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css';
import Contato from './Pages/Contato/Contato';
import Denuncia from './Pages/Denuncia/Denuncia';
import Home from './Pages/Home/Home';
import SobreNos from './Pages/SobreNos/SobreNos';
import Squad30 from './assets/img/squad30-removebg-preview.png';
import Produtos from './Pages/Produtos/Produtos';
import PortalVendedor from './Pages/PortalVendedor/PortalVendedor';
import InclusaoProduto from './Pages/InclusaoProduto/InclusaoProduto';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/denuncia" element={<Denuncia/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        <Route path="/sobreNos" element={<SobreNos fotoSquad={Squad30}/>}></Route>
        <Route path= "/produtos" element={<Produtos/>}></Route>
        <Route path= "/portalvendedor" element={<PortalVendedor/>}></Route>
        <Route path= "/portalvendedor/inclusaoproduto" element={<InclusaoProduto/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


