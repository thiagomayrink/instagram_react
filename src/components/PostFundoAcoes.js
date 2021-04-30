export default function PostFundoAcoes() {
    const listaIconesFundo = ["heart-outline","chatbubble-outline","paper-plane-outline"]
    return (
        <div className="acoes">
            <div>
                {listaIconesFundo.map((i)=> (
                    <ion-icon name={i}></ion-icon>
                ))}
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    );
}