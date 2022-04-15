import React from "react";
import './PortalVendedor.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { deleteProduto, getProdutos } from "../../services/ProdutoVendedorService";
import logo from '../../assets/img/Engajablack_logo.png'
import { Link } from "react-router-dom";


const PortalVendedor = () => {

  const[produto, setProduto] = useState([]);

  useEffect(() => {
    getProdutos().then((res) => setProduto(res)).catch((erro) => console.log(erro))
  }, [produto])

  function deletar(id) {
    deleteProduto(id).then(getProdutos().then((res) => setProduto(res)).then(() => window.location.reload())).catch((erro) => console.log(erro))
  }
  

  return(
    <>
      
        <Navbar logo={logo}/>
        
        <div className="justify-content-center body">
            
            <section className="text-center titulo mb-5">
                <h1>ENGAJABLACK</h1>
                <h3 className="mt-3">Gerenciamento de produtos</h3>
            </section>
            
            <section className="container gerenciamento-produtos">
              <div>
                <Link to={"/portalvendedor/inclusaoproduto"}>
                  <button className="btn btn-primary">Adicionar produto</button>
                </Link>              
              </div>

            </section>

            <section>
              <div className="lista-produtos container bg-dark text-light p-2">
                <div className="row">
                  <div className="col-sm-6">
                    <h5>Nome do Produto</h5>
                  </div>
                  <div className="col-sm-4">
                    <h5>Preço(R$)</h5>
                  </div>
                  <div className="col-sm-2">
                    
                  </div>
                </div>
                {produto.map((produto)=>(

                  <div className="row mb-4" key={produto.id}>
                    <div className="col-sm-6">
                      <span>{produto.nomeProduto}</span>
                    </div>
                    <div className="col-sm-4">
                      <span>R${produto.preco.toFixed(2)}</span>
                    </div>
                    <div className="col-sm-2">
                      <button className="btn btn-danger" onClick={() => deletar(produto.id)}><i class="bi bi-trash"></i> Apagar</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>


        </div>

        <Footer/>
    </>
  )
}

export default PortalVendedor