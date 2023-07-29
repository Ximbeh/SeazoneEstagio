
import logo from '../assets/img/logo.png';
import {Link} from "react-router-dom"

function Header() {

  return (
    <>
        <header>
        <Link to="/"><img src={logo}/></Link>
        <div className="menu">
        <Link to="calendario"><a>Calendário</a></Link>
        <Link to="clientes"><a>Clientes</a></Link>
        <Link to="orcamentos"><a>Orçamentos</a></Link>
        <Link to="/"> <a className='atual'>Propriedades</a></Link>
        <Link to="controle"><a>Controle</a></Link>
        </div>
        <img src="" className="user"/>
    </header>
    </>
  )

}

export default Header