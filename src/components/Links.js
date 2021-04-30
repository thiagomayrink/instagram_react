const linksLista = ["Sobre" , "Ajuda" , "Imprensa" , "API" , "Carreiras" , "Privacidade" , "Termos" , "Localizações" , "Contas mais relevantes" , "Hashtags", "Idioma"]
export default function Links() {
    return (
        <div className="links">
            {linksLista.map((textoLink)=>(
                <a href="#">
                    {textoLink}
                </a>
            ))}   
        </div>
    );
}
