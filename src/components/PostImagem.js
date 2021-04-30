export default function PostImagem(props) {
    const listaImagens = props.imagem;
    return(
        <div className="conteudo">
            <img alt="" src={listaImagens.map((i)=> i)} />
        </div>
    );
}