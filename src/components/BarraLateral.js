import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function BarraLateral(props) {
    return(
        <div className="sidebar">
            <Usuario userId="catanacomics" userName="Catana"/>
            <Sugestoes titulo="Sugestões para você" subtitulo="Ver tudo"/>
            <Links />
            <Copyright texto="© 2021 INSTAGRAM DO FACEBOOK"/>
        </div>
    );
}
const linksLista = ["Sobre" , "Ajuda" , "Imprensa" , "API" , "Carreiras" , "Privacidade" , "Termos" , "Localizações" , "Contas mais relevantes" , "Hashtags"]
function Links(props) {
    return (
        <div className="links">
            {linksLista.map((textoLink)=>(
                <a href="#">
                    {textoLink}
                </a>
            ))}
            <a href="#">Idioma</a>
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
/*
Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
*/