import ReactDOM from "react-dom";
import BarraNavegacao from "./components/BarraNavegacao"
import FundoMobile from "./components/FundoMobile"
import Conteudo from "./components/Conteudo"

function App() {
    return (
        <>
            <BarraNavegacao />
            <Conteudo />
            <FundoMobile />
        </>
    );
}
ReactDOM.render(<App />, document.querySelector(".root"));
