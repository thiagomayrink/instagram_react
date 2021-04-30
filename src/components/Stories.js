import Story from "./Story"

export default function Stories() {
    const icon = <ion-icon name="chevron-forward-circle"></ion-icon>;
    return(
        <div className="stories">
            <Story />
            <div className="setinha">
                {icon}
            </div>
        </div>
    );
}