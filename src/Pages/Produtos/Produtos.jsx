import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "../../assets/img/Engajablack_logo.png";

import BotaoDenuncia from "../../Components/BotaoDenuncia/BotaoDenuncia";
import Footer from "../../Components/Footer/Footer";
import MainProduto from "../../Components/MainProduto/MainProduto";

function Produtos() {
  return (
    <>
      <Navbar logo={logo} />

      <div className="justify-content-center body">
        <section className="text-center titulo mb-5">
          <h1>ENGAJABLACK</h1>
        </section>

        <MainProduto/>
        

        <BotaoDenuncia />
      </div>

      <Footer />
    </>
  );
}

export default Produtos;