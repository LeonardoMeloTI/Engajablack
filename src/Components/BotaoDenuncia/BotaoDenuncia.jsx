import React from "react";
import { Link } from "react-router-dom";
import './BotaoDenuncia.css';


const BotaoDenuncia = () => {

  return(
    <div className="container denuncia titulo mt-3 bg-dark rounded ml-auto mr-auto p-2">
        <h4 className="p-2 text-white ">Você foi vítima de racismo?</h4>
        <Link to={"/denuncia"}><button className="btn btn-warning">Denuncie agora!</button></Link>
        

    </div>
  );
}


export default BotaoDenuncia