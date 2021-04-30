export default function Logo(props) {
    const icon = <ion-icon name="logo-instagram"></ion-icon>
    return (
        <>
            <div className="logo">
                {icon}
                <div className="separador"></div>
                <img alt="" src={props.img} />
            </div>
            <div className="logo-mobile">
                {icon}
            </div>
            <div className="instagram-mobile">
                <img alt="" src={props.img} />
            </div>
        </>
    );
}