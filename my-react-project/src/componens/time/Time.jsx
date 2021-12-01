import s from "./Time.module.css";
import iconClock from "./../../assets/images/icon-clock.png";

function Time(props) {
    return (
        <div className={s.time}>
            <img className={s.timeIcon} src={iconClock} alt="Icon clock"/>
            <span className={s.timeText}>2:00 pm</span>
        </div>
    );
}
  
  export default Time;