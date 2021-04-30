const listaSugestao = [
    {imagem: "assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
    {imagem: "assets/img/chibirdart.svg", nome:"chibirdart", razao:"Segue você"},
    {imagem: "assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
    {imagem: "assets/img/adorable_animals.svg", nome:"adorable_animals", razao:"Segue você"},
    {imagem: "assets/img/smallcutecats.svg", nome:"smallcutecats", razao:"Segue você"},
];   
export default function Sugestao(props) {
    return (
        <>
            {listaSugestao.map((itemSugestao) => (
                <div className="sugestao">
                    <div className="usuario">
                        <img alt="" src={itemSugestao.imagem} />
                        <div className="texto">
                            <div className="nome">{itemSugestao.nome}</div>
                            <div className="razao">{itemSugestao.razao}</div>
                        </div>
                    </div>
                    <div className="seguir">
                        {props.opcao}
                    </div>
                </div>
            ))}
        </>
    );
}