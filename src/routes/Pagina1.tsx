

//importação de componentes
import Card from '../components/Card'
import Filtros from '../components/Filtros'
import Footer from '../components/Footer'
import Header from '../components/Header'

//importação de links e conteudos 
import content from '../components/content'
import {Link} from "react-router-dom"


function Pagina1() {

  return (
    <>
    <Header />
      <main>
        <Filtros/>
        <article className="principal">
          <section className="header_principal">
            <div className="textos_main">
              <h1>Todos os imóveis</h1>
              <h5>200 imóveis</h5>
            </div>
            <div className="ordem">
              <select name="ordenar" className="ordenar">
                <option value="preco">Ordenar</option>
                <option value="preco">Preço</option>
                <option value="tamanho">Tamanho</option>
                <option value="tempo">Tempo de hospedagem</option>
              </select>
            </div>
          </section>
          <section className="cards">
            {/* Utilizei o map para capturar o ID dos cards*/}
            {/* Linkei o card a um ID, para ser clicavel e redirecionado a uma nova pagina com o consequente ID*/}
            {content.map(content => (
              <Link to={`/Produto/${content.id}`}  key={content.id}>
                  <Card
                  foto={content.foto}
                  nome={content.nome}
                  info={content.info}
                  valorDiaria={content.valorDiaria}
                  cincoDiarias={content.cincoDiarias}
                  limpeza={content.limpeza}
                  caucao={content.caucao}
                  total={content.total}
                  aVista={content.aVista} id={undefined}                  />
              </Link>
            ))}
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Pagina1
