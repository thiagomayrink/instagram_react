export default function Usuario(props) {
    return (
        <div className="usuario">
                <img alt="" src="assets/img/catanacomics.svg" />
                <div className="texto">
                    <strong>{props.userId}</strong>
                    {props.userName}
                </div>
        </div>
    );
}