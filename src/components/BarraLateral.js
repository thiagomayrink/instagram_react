import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"
import Links from "./Links"

export default function BarraLateral() {
    return(
        <div className="sidebar">
            <Usuario userId="catanacomics" userName="Catana"/>
            <Sugestoes titulo="Sugestões para você" subtitulo="Ver tudo"/>
            <Links />
            <Copyright texto="© 2021 INSTAGRAM DO FACEBOOK"/>
        </div>
    );
}
function Copyright(props) {
    return (
    <div className="copyright">
        {props.texto}
    </div>
);
}