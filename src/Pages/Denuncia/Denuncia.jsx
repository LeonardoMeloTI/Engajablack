import React from "react";
import './Denuncia.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import logo from '../../assets/img/Engajablack_logo.png'
import FormDenuncia from "../../Components/FormDenuncia/FormDenuncia";


const Denuncia = () => {

  return(
    <>
      <Navbar logo={logo}/>
      <main className="body">
        <section className="text-center titulo mb-5">
                <h1>ENGAJABLACK</h1>
        </section>
        <FormDenuncia/>
        <Footer/>
      </main>
      
    </>
  );
}

export default Denuncia;