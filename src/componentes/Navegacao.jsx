import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom'
import styles from './Navegacao.module.css'
import {Nav} from 'react-bootstrap';
import Vacinas from '../pages/Vacinas'
import MuuControl from '../pages/MuuControl'
import Historico from '../pages/Historico'
import Animais from '../pages/Animais'
import RegistrarOrdenha from '../pages/RegistrarOrdenha'
import Cabecalho from './Cabecalho';
import logo from '../assets/imagens/logomuu.png'
import RegistrarAnimais from '../pages/RegistrarAnimais';


function Navegacao (){
    return (
        <div>
            <Cabecalho/>
            <BrowserRouter>
                <Nav className={styles.navegacao} variant="tabs">
                    <div className={styles.caixa1}>
                        <Nav.Link className={styles.home} as={Link} to="/">Muu Control</Nav.Link>
                        <img src={logo} alt='logo'/>
                        <br/>
                        <Nav.Link className={styles.botaos} as={Link} to="/animais">Animais</Nav.Link>
                        <br/>
                        <Nav.Link className={styles.botaos} as={Link} to="/registrar">Registrar Ordenha</Nav.Link>
                        <br/>
                        <Nav.Link className={styles.botaos} as={Link} to="/vacinas">Vacinas</Nav.Link>
                        <br/>
                        <Nav.Link className={styles.botaos} as={Link} to="/historico">Historico</Nav.Link>
                    </div>
                </Nav>
                <Routes>
                    <Route path="/" exact={true} element={<MuuControl/>}/>
                    <Route path="/registrar" element={<RegistrarOrdenha/>}/>
                    <Route path="/animais" element={<Animais/>}/>
                    <Route path="/vacinas" element={<Vacinas/>}/>
                    <Route path="/historico" element={<Historico/>}/>
                    <Route path="/registraranimais" element={<RegistrarAnimais/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default Navegacao