import React from "react";
import { PanelGroup } from "rsuite";
import "./MainProduto.css";
import CardProduto from "./CardProduto";

const MainProduto = () => {
  return (
    <>
       <h2 >Pertinho de você ...</h2>
     <section className="abc">
        <div className="painel"
        
        >
          <PanelGroup header="Sample Panel title" shaded>
            <div class="category">
            <h2 >Categorias</h2>
              <div class="row">
                
                  <div class="left-sidebar">
                    <div class="panel-group" id="accordian">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#Comida">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Comida
                            </a>
                          </h4>
                        </div>
                        <div id="Comida" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Hamburguer do tio </a>
                              </li>
                              <li>
                                <a href="/produtos"> Marmita da Tia</a>
                              </li>
                              <li>
                                <a href="/produtos"> Pizzaria do malandro </a>
                              </li>
                              <li>
                                <a href="/produtos"> Fome Zero</a>
                              </li>
                              <li>
                                <a href="/produtos"> Açaí da Ana</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#Roupas">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Roupas
                            </a>
                          </h4>
                        </div>
                        <div id="Roupas" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Preta Margô </a>
                              </li>
                              <li>
                                <a href="/produtos"> Favela House</a>
                              </li>
                              <li>
                                <a href="/produtos"> Bradock Marcas</a>
                              </li>
                              <li>
                                <a href="/produtos"> MM Modas</a>
                              </li>
                              <li>
                                <a href="/produtos"> King Jacaré Multimarcas</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#Beleza">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Beleza
                            </a>
                          </h4>
                        </div>
                        <div id="Beleza" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Jhú Barber Shop</a>
                              </li>
                              <li>
                                <a href="/produtos"> Dani Piercings</a>
                              </li>
                              <li>
                                <a href="/produtos"> Salão Rozely</a>
                              </li>
                              <li>
                                <a href="/produtos"> Tranças Cavo</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#Bares">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Bar/Depósito de bebidas
                            </a>
                          </h4>
                        </div>
                        <div id="Bares" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Barão Bebidas LTDA</a>
                              </li>
                              <li>
                                <a href="/produtos"> Bar do Tinoco </a>
                              </li>
                              <li>
                                <a href="/produtos"> Bar da Beira</a>
                              </li>
                              <li>
                                <a href="/produtos"> </a>
                              </li>
                              <li>
                                <a href="/produtos"> </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#eletronicos">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Eletrônicos
                            </a>
                          </h4>
                        </div>
                        <div id="eletronicos" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos">LP Celulares </a>
                              </li>
                              <li>
                                <a href="/produtos"> LanHouse com VideoGame</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#tabacaria">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Tabacaria
                            </a>
                          </h4>
                        </div>
                        <div id="tabacaria" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Tabacaria da Tia</a>
                              </li>
                              <li>
                                <a href="/produtos"> Jack Narguille</a>
                              </li>
                              <li>
                                <a href="/produtos"> Thug King</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#festa">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Festa
                            </a>
                          </h4>
                        </div>
                        <div id="festa" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos">Simone Festas Descartaveis</a>
                              </li>
                              <li>
                                <a href="/produtos"> Salão d festas Jerusalem</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#oficina">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Oficina
                            </a>
                          </h4>
                        </div>
                        <div id="oficina" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos">Conserto Bike</a>
                              </li>
                              <li>
                                <a href="/produtos"> Eletro Paulo</a>
                              </li>
                              <li>
                                <a href="/produtos">Renato Refrigeração</a>
                              </li>
                              <li>
                                <a href="/produtos">Dior</a>
                              </li>
                              <li>
                                <a href="/produtos">Versace</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" href="#cultura">
                              <span class="badge pull-right">
                                <i class="fa fa-plus"></i>
                              </span>
                              Eventos/
                              <br />
                              Arte/cultura
                            </a>
                          </h4>
                        </div>
                        <div id="cultura" class="panel-collapse collapse">
                          <div class="panel-body">
                            <ul>
                              <li>
                                <a href="/produtos"> Aula de dança</a>
                              </li>
                              <li>
                                <a href="/produtos"> Taekwondo BlackBelt Grajaú</a>
                              </li>
                              <li>
                                <a href="/produtos"> Roda de Rima</a>
                              </li>
                              <li>
                                <a href="/produtos"> Aula de Violão</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                </div>
              </div>
            </div>
          </PanelGroup>
        </div>
         <section className="def">
          <div className="container-flex">
          <CardProduto/>
          
              
          
          </div>
          </section>
      </section>
    </>
  );
};

export default MainProduto;