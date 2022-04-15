import React from "react";
import './SobreNos.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BotaoDenuncia from "../../Components/BotaoDenuncia/BotaoDenuncia";
import logo from '../../assets/img/Engajablack_logo.png';


const SobreNos = (props) => {

  return(
    <>
      
        <Navbar logo={logo}/>
        
        


        <div className="justify-content-center body">
            
            <section className="text-center titulo mb-5">
                <h1>ENGAJABLACK</h1>
            </section>
            
            
            <section class="sobre-nos rounded bg-dark text-white p-2 m-3">
              <h3 class="titulo text-center">Sobre nós</h3>
              <p class="text-center">
                Somos uma equipe de jovens programadores, em formação FullStack pelo programa RecodePro,
                que sensibilizados com a dificuldade que os empreendedores negros e periféricos sofrem em comparação aos outros grupos sociais ,
                desenvolvemos esta tecnologia para que haja maior pertencimento e perspectiva de melhora de vida para nosso público alvo.
              </p>
            </section>

            <section class="integrantes">
                <img alt="Foto dos integrantes do squad 30" src={props.fotoSquad}/>
            </section>


            <BotaoDenuncia/>

            <Footer/>
        </div>

        
    </>
  );
}

export default SobreNos;