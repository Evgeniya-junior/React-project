import s from "./Subtitle.module.css";

function Subtitle(props) {
    return (
        <div className={s.subtitle}>
            <h1 className={s.title}>{props.title}</h1>
        </div>
    );
}

export default Subtitle;