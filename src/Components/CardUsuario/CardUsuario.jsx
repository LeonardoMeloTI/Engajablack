import React from "react";
import { Link } from "react-router-dom";
import './CardUsuario.css'



const CardUsuario = () => {

  return(
    <div>
      <main className="card ">

                
                <Link to={"/produtos"}>
                  <button type="button" className="btn btn-danger btn-block btn-menu">
                    <i className="bi bi-bag"></i> Sou Cliente
                  </button>
                </Link>
                
                  
                
                

                <Link to={"/portalvendedor"}>
                 <button type="button" className="btn btn-danger btn-block btn-menu" data-toggle="modal" data-target="#empreendedor"
                  data-whatever="@fat">
                      <i className="bi bi-shop-window"></i> Sou Empreendedor       
                  </button>
                </Link>
                
                

                <Link to={"/portalvendedor"}>
                  <button type="button" className="btn btn-danger btn-block btn-menu" data-toggle="modal" data-target="#fornecedor"
                  data-whatever="@getbootstrap">
                      <i className="bi bi-truck"></i> Sou Fornecedor                     
                  </button>
                </Link>

                  



                  
                
      </main>
        <div className="modal fade" id="cliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Busque uma loja na perifa!</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-group">
                              <label for="ramo" className="col-form-label">Ramo:</label>
                              <select className="form-control" id="ramo">
                                <option selected>Escolha...</option>
                                <option> Comida </option>
                                <option> Roupas </option>
                                <option> Beleza </option>
                                <option> Bares / Depósito de bebidas </option>
                                <option> Eletrônicos </option>
                                <option> Tabacaria </option>
                                <option> Festa </option>
                                <option> Oficina </option>
                                <option> Eventos/arte/cultura </option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="municipio" className="col-form-label">Município:</label>
                              <select className="form-control" id="municipio">
                                <option selected>Escolha...</option>
                                <option> Rio de Janeiro - RJ </option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="comunidade" className="col-form-label">Região de atuação (comunidade)</label>
                              <select className="form-control" id="comunidade">
                              <option selected>Escolha...</option>
                                    <option> Jacaré </option>
                                    <option> Mangueira </option>
                                    <option> Mandela </option>
                                    <option> Urubu </option>
                                    <option> Nova Holanda </option>
                              </select>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                          <Link to={"/produtos"}>
                            <button type="button" className="btn btn-primary">Buscar</button>
                          </Link>                         
                        </div>
                      </div>
                    </div>
      </div>
       

      <div className="modal fade" id="empreendedor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Cadastre-se ou <a href="/">Faça login</a></h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-group">
                              <label for="inputNomeEmpreendedor" className="col-form-label">Nome Completo:</label>
                              <input type="text" className="form-control" id="inputNomeEmpreendedor" placeholder="Nome Completo"/>
                            </div>
                            <div className="form-group">
                              <label for="enderecoLoja" className="col-form-label">Endereço do Empreendimento:</label>
                              <input type="nome" className="form-control" id="enderecoLoja" placeholder="Rua , nº, complemento"/>
                            </div>
                            <div className="form-group">
                              <label for="telefoneEmpreendedor">Telefone:</label>
                              <input type="text" className="form-control" id="telefoneEmpreendedor" placeholder="(99)99999-9999"/>
                            </div>
                            <div className="form-group">
                              <label for="cnpjEmpreendedor">CNPJ:</label>
                              <input type="text" className="form-control" id="cnpjEmpreendedor" placeholder="XX. XXX. XXX/XXXX-XX"/>
                            </div>
                            <div className="form-group">
                                    <label for="ramoLoja">Ramo:</label>
                                    <select id="ramoLoja" className="form-control">
                                        <option selected>Escolha...</option>
                                        <option> Comida </option>
                                        <option> Roupas </option>
                                        <option> Beleza </option>
                                        <option> Bares / Depósito de bebidas </option>
                                        <option> Eletrônicos </option>
                                        <option> Tabacaria </option>
                                        <option> Festa </option>
                                        <option> Oficina </option>
                                        <option> Eventos/arte/cultura </option>

                                    </select>
                            </div>
                            <div className="form-group">
                                <label for="municipioLoja">Município:</label>
                                <select id="municipioLoja" className="form-control">
                                    <option selected>Escolha...</option>
                                    <option> Rio de Janeiro - RJ </option>
                                    
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="comunidadeLoja">Região de atuação (comunidade):</label>
                                <select id="comunidadeLoja" className="form-control">
                                    <option selected>Escolha...</option>
                                    <option> Jacaré </option>
                                    <option> Mangueira </option>
                                    <option> Mandela </option>
                                    <option> Urubu </option>
                                    <option> Nova Holanda </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <span className="input-group-addon align-content-center">Funcionamento:</span>
                                <div className="form-row">
                                    <a className="dropdown-item" href="/">
                                        Das
                                        <div className="input-timerange input-group col-md-6" id="timepicker">
                                            <input type="time" className="input-sm form-control" name="start" />
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        Às
                                        <div className="input-timerange input-group col-md-6" id="timepicker">
                                            <input type="time" className="input-sm form-control" name="start" />
                                        </div>
                                    </a>

                                </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                          <button type="button" className="btn btn-primary">Cadastrar</button>
                        </div>
                      </div>
                    </div>
      </div>


      <div className="modal fade" id="fornecedor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Cadastre-se ou <a href="/">Faça login</a></h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                          <div className="form-group">
                              <label for="inputNomeEmpreendedor" className="col-form-label">Nome Completo:</label>
                              <input type="text" className="form-control" id="inputNomeEmpreendedor" placeholder="Nome Completo"/>
                            </div>
                            <div className="form-group">
                              <label for="enderecoLoja" className="col-form-label">Endereço do Empreendimento:</label>
                              <input type="nome" className="form-control" id="enderecoLoja" placeholder="Rua , nº, complemento"/>
                            </div>
                            <div className="form-group">
                              <label for="telefoneEmpreendedor">Telefone:</label>
                              <input type="text" className="form-control" id="telefoneEmpreendedor" placeholder="(99)99999-9999"/>
                            </div>
                            <div className="form-group">
                              <label for="cnpjEmpreendedor">CNPJ:</label>
                              <input type="text" className="form-control" id="cnpjEmpreendedor" placeholder="XX. XXX. XXX/XXXX-XX"/>
                            </div>
                            <div className="form-group">
                                    <label for="ramoLoja">Ramo:</label>
                                    <select id="ramoLoja" className="form-control">
                                        <option selected>Escolha...</option>
                                        <option> Comida </option>
                                        <option> Roupas </option>
                                        <option> Beleza </option>
                                        <option> Bares / Depósito de bebidas </option>
                                        <option> Eletrônicos </option>
                                        <option> Tabacaria </option>
                                        <option> Festa </option>
                                        <option> Oficina </option>
                                        <option> Eventos/arte/cultura </option>

                                    </select>
                            </div>
                            <div className="form-group">
                                <label for="municipioLoja">Município:</label>
                                <select id="municipioLoja" className="form-control">
                                    <option selected>Escolha...</option>
                                    <option> Rio de Janeiro - RJ </option>
                                    
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="comunidadeLoja">Região de atuação (comunidade):</label>
                                <select id="comunidadeLoja" className="form-control">
                                    <option selected>Escolha...</option>
                                    <option> Jacaré </option>
                                    <option> Mangueira </option>
                                    <option> Mandela </option>
                                    <option> Urubu </option>
                                    <option> Nova Holanda </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <span className="input-group-addon align-content-center">Funcionamento:</span>
                                <div className="form-row">
                                    <a className="dropdown-item" href="/">
                                        Das
                                        <div className="input-timerange input-group col-md-6" id="timepicker">
                                            <input type="time" className="input-sm form-control" name="start" />
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        Às
                                        <div className="input-timerange input-group col-md-6" id="timepicker">
                                            <input type="time" className="input-sm form-control" name="start" />
                                        </div>
                                    </a>

                                </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                          <button type="button" className="btn btn-primary">Enviar</button>
                        </div>
                      </div>
                    </div>
      </div>


    </div>
  );
}

export default CardUsuario