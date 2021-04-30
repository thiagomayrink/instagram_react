export default function IconesNavegacao() {
    const iconsList = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    const iconMobile = iconsList[0];
    return (
        <>
            <div className="icones">
                {iconsList.map((icon)=> (
                    <ion-icon name={icon}></ion-icon>
                ))}
            </div>
            <div className="icones-mobile">
                <ion-icon name={iconMobile}></ion-icon>
            </div>
        </>    
    );
}