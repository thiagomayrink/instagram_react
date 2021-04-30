export default function FundoMobile() {
    const iconsList = ["home", "search-outline", "add-circle-outline", "heart-outline","person-outline"];
    return(
        <div className="fundo-mobile">
            {iconsList.map((icon) =>(
                <ion-icon name={icon}></ion-icon>
            ))}
        </div>
    );
}