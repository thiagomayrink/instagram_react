export default function PostFundoCurtidas(props) {
    const listaCurtidas = props.curtidas;
    return (
        <>
            {listaCurtidas.map((dados)=>(
                <div className="curtidas">
                    <img alt="" src={dados.img} />
                    <div className="texto">
                        Curtido por <strong>{dados.perfil}</strong> e <strong>outras {dados.contador} pessoas</strong>
                    </div>
                </div>
            ))}
        </>
    );
}