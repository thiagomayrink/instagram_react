import Stories from "./Stories"
import BarraLateral from "./BarraLateral"
import Posts from "./Posts"

export default function Conteudo() {
    return (
    <div className="corpo">
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
        <BarraLateral />
    </div>
    );
}