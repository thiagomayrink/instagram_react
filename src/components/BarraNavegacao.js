import IconesNavegacao from "./IconesNavegacao"
import Logo from "./Logo"

export default function BarraNavegacao(props) {
    return (
        <div className="navbar">
            <div className="container">
                <Logo img="assets/img/logo.png"/>
                <Pesquisar />
                <IconesNavegacao />
            </div>
        </div>
    );
}
function Pesquisar() {
    return(
        <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}