export default function PostTopo(props) {
    const dadosPostUsuario = props.usuario;
    return (
        <>
            {dadosPostUsuario.map((u) => (
                <div className="topo">
                    <div className="usuario">
                        <img alt="" src={u.imagem} />
                        {u.nome}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
            ))}
        </>  
    );
}