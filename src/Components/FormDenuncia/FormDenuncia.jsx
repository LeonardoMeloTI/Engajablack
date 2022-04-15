import React from "react";
import { useRef } from "react";
import { saveDenuncia } from "../../services/DenunciaService";

import './FormDenuncia.css'



const FormDenuncia = () =>{


  const nome = useRef();
  const telefone = useRef();
  const email = useRef();
  const ocorrido = useRef();

  function enviarDados(event){
    event.preventDefault()
    const denuncia = {
      email: email.current.value,
      nome: nome.current.value,
      ocorrido: ocorrido.current.value,
      telefone: telefone.current.value
    }
    saveDenuncia(denuncia).then(() => window.location.reload()).catch((erro) => console.log(erro))
  }
  

  return(
    <section className="container form-denuncia">
      <form onSubmit={enviarDados}>
                

                <div className="form-group">
                  <label for="exampleInputEmail1">Nome completo:</label>
                  <input type="text" className="form-control" placeholder="Nome" ref={nome}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Telefone:</label>
                    <input type="text" className="form-control" placeholder="Telefone" ref={telefone}/>
                </div>


                
                <div className="form-group">
                    <label for="exampleInputEmail1">Endereço de email:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Seu email" ref={email}/>
                    <small id="emailHelp" className="form-text text-white">Nunca vamos compartilhar seu email, com
                        ninguém.</small>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Descreva o ocorrido:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={ocorrido}></textarea>
                </div>
                <p id="avisoDenuncia" className="bg-dark">A pessoa que faz a comunicação de um crime que não ocorreu, gerando a atuação de uma autoridade no
                    intuito de investigar o falso crime, pode ser responsabilizada pelo crime de comunicação falsa de crime,
                    previsto no artigo 340 do Código Penal, e está sujeita a uma pena de até 6 meses de detenção e multa</p>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Estou ciente</label>
                </div>
                <button type="submit" className="btn btn-enviar-denuncia">Enviar</button>
      </form>
    </section>
  )
}

export default FormDenuncia;