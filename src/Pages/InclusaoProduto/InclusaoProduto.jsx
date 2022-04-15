import React from "react";
import './InclusaoProduto.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import logo from '../../assets/img/Engajablack_logo.png'
import { useRef } from "react";

import { saveProduto } from "../../services/ProdutoVendedorService";

const InclusaoProduto = () => {

  const nomeProduto = useRef()
  const preco = useRef()

  function postarProduto(event){
    event.preventDefault()
    const produto = {
      nomeProduto: nomeProduto.current.value,
      preco: preco.current.value
    }
    saveProduto(produto).then(() => window.history.back()).catch((erro) => console.log(erro))

  }

  return(
    <>
      
        <Navbar logo={logo}/>
        
        <div className="justify-content-center body">
            
            <section className="text-center titulo mb-5">
                <h1>ENGAJABLACK</h1>
                <h3 className="mt-3">Gerenciamento de produtos</h3>
            </section>

            <section className="container section-inclusao-produto text-white">
              <h4 className="text-center">Cadastro de novo produto</h4>
              <form className="formulario-inclusao" onSubmit={postarProduto}>
                <div className="form-group">
                  <label for="produto">Nome do Produto:</label>
                  <input type="text" className="form-control" id="produto" aria-describedby="emailHelp" placeholder="Digite o nome do produto" ref={nomeProduto}/>
                </div>
                <div className="form-group">
                  <label for="preco">Preço(R$):</label>
                  <input type="number" className="form-control" id="preco" placeholder="Digite o preço do produto" min={0} step={0.01} ref={preco}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
              </form>
            </section>
            
            


        </div>

        <Footer/>
    </>
  )
}

export default InclusaoProduto
