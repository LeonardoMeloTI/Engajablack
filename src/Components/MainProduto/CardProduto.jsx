import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/img/Engajablack_logo.png";
import { getProdutos } from "../../services/ProdutoVendedorService";

const CardProduto = () => {

  const [produto, setProduto] = useState([])

  useEffect(() => { getProdutos().then((res) => setProduto(res))
    .catch((erro) => console.log(erro))},[])

  return (
    <section className="def"> 
    {produto.map((produto) => (

      <div className="card-group ">
        <div className="card">
          <div className="products">
            <div className="productinfo text-center">
              <img id="img" src={logo} alt="Logotipo" />
              <h2 className="text-warning">R${produto.preco}</h2>
              <p>{produto.nomeProduto}</p>
              <a href="/produtos" className="btn btn-default add-to-cart">
                <i></i>Ver mais informações
              </a>
            </div>
          </div>
        </div> 
      </div>
    ))}
    
    </section>
  );
};

export default CardProduto;