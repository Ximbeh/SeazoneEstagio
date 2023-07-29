import { useState } from 'react'

//importação das imagens
import airbnb from '../assets/img/air.png';
import icone from '../assets/img/icone.png';
import vector from '../assets/img/vector.png';

//utilização do props para mudança de conteudo conforme ID
function Card(props) {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div key={props.id} className="card">
              <section className="img">
                <img src={props.foto} className="img_predio"/>
                <img src={airbnb} className="airbnb"/>
                <img src={icone} className="seazone"/>
              </section>
              <section className="info1">
                <h1>{props.nome}</h1>
                <img className="options" src={vector}/>
                <h4>{props.info}</h4>
              </section>
              <section className="info2">
                <div className="info_preco1">
                  <h3>Valor diária</h3>
                  <h3>Total 5 diárias</h3>
                  <h3>Taxa de limpeza</h3>
                  <h3>Caução</h3>
                  <h2>Total</h2>
                </div>
                <div className="info_preco2">
                  <h3>{props.valorDiaria}</h3>
                  <h3>{props.cincoDiarias}</h3>
                  <h3>{props.limpeza}</h3>
                  <h3>{props.caucao}</h3>
                  <div className="total">
                    <h2 className="cinza">{props.total}</h2>
                    <h2 className="verde">{props.aVista}</h2>
                    <span></span>
                    <h4>à vista</h4>
                  </div>
                </div>
              </section>
        </div>
      </>
    )
}

export default Card