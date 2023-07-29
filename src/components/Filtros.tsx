import { useState } from 'react'

function Filtros() {
    const [numHospedes, setNumHospedes] = useState(2);

    //Evento para aumentar número de Hóspedes
    const handleMaisClick = () => {
      setNumHospedes(numHospedes + 1);
      
    };
    
    //Evento para diminuir número de Hóspedes
    const handleMenosClick = () => {
      if (numHospedes > 1) {
        setNumHospedes(numHospedes - 1);
      }
    };
    
    const [count, setCount] = useState(0)

    return (
        <>  
            <article className="filtros">
            <div className="filtro">
                <h2>Localização</h2>
                <select name="cidade_select" className="cidade_select">
                <option value="florianopolis">Florianópolis</option>
                <option value="sao_jose">São José</option>
                <option value="palhoca">Palhoça</option>
                </select>
            </div>
            <div className="filtro">
                <h2>Preço</h2>
                <select name="preco_select" className="preco_select">
                <option value="10000">300-10000</option>
                <option value="20000">10000-20000</option>
                <option value="50000">20000-50000</option>
                <option value="100000">50000-100000</option>
                </select>
            </div>
            <div className="filtro">
                <h2>Check-in</h2>
                <input className="data" type="date"/>
            </div>
            <div className="filtro">
                <h2>Check-out</h2>
                <input className="data" type="date"/>
            </div>
                <div className="filtro">
                    <h2>Nº de hóspedes</h2>
                    <div className="N_hospedes">
                    <button className="maismenos menos" onClick={handleMenosClick}>
                    -
                    </button>
                    <p className="numero">{numHospedes}</p>
                    <button className="maismenos mais" onClick={handleMaisClick}>
                    +
                    </button>
                </div>
                </div>
            <button className="buscar">Buscar</button>
            <a className="maisFiltros">+ Mais filtros</a>
            </article>
            </>
      )
    
    }
    
    export default Filtros
