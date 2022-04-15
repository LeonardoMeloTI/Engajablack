import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import logo from '../../assets/img/Engajablack_logo.png'
import CardUsuario from '../../Components/CardUsuario/CardUsuario';
import BotaoDenuncia from '../../Components/BotaoDenuncia/BotaoDenuncia';
import Footer from '../../Components/Footer/Footer';




function Home() {
  return (
    <>
      
        <Navbar logo={logo}/>
        
        


        <div className="justify-content-center body">
            
            <section className="text-center titulo mb-5">
                <h1>ENGAJABLACK</h1>
            </section>
            
            <CardUsuario/>



            <BotaoDenuncia/>


        </div>

        <Footer/>
    </>
  );
}

export default Home;
