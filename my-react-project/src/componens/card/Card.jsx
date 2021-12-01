
import s from "./Card.module.css";

function Card(props) {
    return (
        <div className={s.card}>
            <img className={s.img} src={props.thumbnail} alt="Loco news channels"  />
            <h3 className={s.title}>{props.title}</h3>
        </div>
    );
}

export default Card;