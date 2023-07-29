//Importação do DOM
import { useState } from 'react'
import { useParams } from "react-router-dom";

//Importação dos componentes
import Filtros from '../components/Filtros'
import Header from '../components/Header'
import Footer from '../components/Footer'
import content from '../components/content'

//importação das imagens
import circulo from '../assets/img/Circulo.svg'
import people from '../assets/img/people.svg'
import clean from '../assets/img/Clean.svg'
import donate from '../assets/img/Donate.svg'
import flecha from '../assets/img/Flecha7.svg'

function Produto() {
    const [count, setCount] = useState(0);
    const { id } = useParams();

    {/*Aplicação dos conteudos com seus conformes ID's*/}
    const selectedContent = content.find(content => content.id === parseInt(id, 10));
    if (!selectedContent) {
        return <div>No content found for the provided id.</div>;
    }
  

  return (
    <>
    <Header/>
      <main>
        <Filtros/>
        {/* indicando o ID para este article, que engloba tudo o que precisa ser mudado de ID para ID */}
            <article className="principal2" key={selectedContent.id}>
                <section className="header_principal2">
                    <h4>Imóveis - {selectedContent.bairro}</h4>
                </section>

                <div className="info">
                    <section className="foto">
                        <img src={selectedContent.foto}/>
                        <h2>Localização</h2>
                        <h4>
                            {selectedContent.localizacao}
                            <br/>
                            CEP {selectedContent.cep}
                        </h4>
                        <a href="https://goo.gl/maps/n5u3kY3sJUQ4qY719" target="_blank">Ver localização</a>
                    </section>
                    <section className="textos">
                        <div className="info3">
                            
                            <h1>{selectedContent.nome}</h1>
                            <h4>{selectedContent.bairro}, Florianópolis</h4>
                            <div className="grid1">
                                <h3>{selectedContent.comodos}</h3>
                                <div>
                                    <img className="circulo" src={circulo} width="10px"/>
                                    <p>{selectedContent.status}</p>
                                </div>
                            
                            </div>
                            <div className="caracteristica">
                                <div className="box">
                                    <h3>Máx. de hóspedes</h3>
                                    <div>
                                        <img src={people} alt=""/>
                                        <h1>{selectedContent.maxHospedes}</h1>
                                    </div>
                                </div>
                                <div className="box">
                                    <h3>Taxa de limpeza</h3>
                                    <div>
                                        <img src={clean} alt=""/>
                                        <h1>{selectedContent.limpeza}</h1>
                                    </div>
                                </div>
                                <div className="box">
                                    <h3>Caução</h3>
                                    <div>
                                        <img src={donate} alt=""/>
                                        <h1>{selectedContent.caucao}</h1>
                                    </div>
                                </div>

                            </div>
                            <h2 className="camas">Camas</h2>
                        </div>
                        <div className="info4">
                            <div className="cama">
                                <li>1 cama de casal:</li>
                                <p>duplo</p>

                            </div>
                            <div className="cama">
                                <li>1 sofá cama:</li>
                                <p>sala/área comum</p>

                            </div>
                            <h2>Regras</h2>

                            <div className="caracteristica2">
                                <div>
                                    <p>Aceita crianças (de 02 até 12 anos)</p>
                                    <p className={selectedContent.aceitaCrianca}>{selectedContent.aceitaCrianca}</p>
                                </div>
                                <div>
                                    <p>Aceita Bebês(abaixo de 02 anos)</p>
                                    <p className={selectedContent.aceitaBebes}>{selectedContent.aceitaBebes}</p>
                                </div>
                                <div>
                                    <p>Fornece Berços</p>
                                    <p className={selectedContent.forneceBercos}>{selectedContent.forneceBercos}</p>
                                </div>
                                <div>
                                    <p>Restrição de Idade Minima para Fazer Reserva</p>
                                    <p className={selectedContent.restricaoIdade}>{selectedContent.restricaoIdade}</p>
                                </div>

                            </div>
                            <div className="caracteristica2">
                                <div>
                                    <p>Permitido fumar no quarto</p>
                                    <p className={selectedContent.fumar}>{selectedContent.fumar}</p>
                                </div>
                                <div>
                                    <p>Aceita animais de estimação</p>
                                    <p className={selectedContent.animais}>{selectedContent.animais}</p>
                                </div>
                                <div>
                                    <p>Eventos são Permitidos</p>
                                    <p className="sim">{selectedContent.eventos}</p>
                                </div>
                                

                            </div>
                            <div className="regras">
                                <a>Mais regras</a>
                                <img src={flecha} width="10px"/>
                            </div>
                            <h2>Comodidades</h2>

                            <div className="caracteristica2">
                                <div>
                                    <p>Estacionamento</p>
                                    <p className={selectedContent.estacionamento}>{selectedContent.estacionamento}</p>
                                </div>
                                <div>
                                    <p>Elevador</p>
                                    <p className={selectedContent.elevador}>{selectedContent.elevador}</p>
                                </div>
                                <div>
                                    <p>Porteiro</p>
                                    <p className={selectedContent.porteiro}>{selectedContent.porteiro}</p>
                                </div>
                                <div>
                                    <p>Piscina Privada</p>
                                    <p className={selectedContent.piscinaPrivada}>{selectedContent.piscinaPrivada}</p>
                                </div>
                                <div>
                                    <p>Camêra</p>
                                    <p className={selectedContent.camera}>{selectedContent.camera}</p>
                                </div>

                            </div>
                            <div className="caracteristica2"    >
                                <div>
                                    <p>Piscina Pública</p>
                                    <p className={selectedContent.piscinaPublica}>{selectedContent.piscinaPublica}</p>
                                </div>
                                <div>
                                    <p>Internet</p>
                                    <p className={selectedContent.internet}>{selectedContent.internet}</p>
                                </div>
                                <div>
                                    <p>Wi-Fi</p>
                                    <p className={selectedContent.wifi}>{selectedContent.wifi}</p>
                                </div>
                                <div>
                                    <p>Ar Condicionado</p>
                                    <p className={selectedContent.arCondicionado}>{selectedContent.arCondicionado}</p>
                                </div>
                                <div>
                                    <p>Trava Eletrônica</p>
                                    <p className={selectedContent.trava}    >{selectedContent.trava}</p>
                                </div>

                            </div>
                        
                        </div>
                    </section>

                </div>
            </article>
      </main>
    <Footer/>
    </>
  )
}

export default Produto
