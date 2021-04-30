import Sugestao from "./Sugestao"

export default function Sugestoes(props) {
    return (
        <div className="sugestoes">
            <div className="titulo">
                {props.titulo}
                <div>{props.subtitulo}</div>
            </div>
            <Sugestao opcao="Seguir"/>
        </div>
    );
}