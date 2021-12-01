import s from "./MenuItems.module.css";
import arrowTop from "../../assets/images/arrow-top.png";
import arrowBot from "../../assets/images/arrow-bottom.png";

function MenuItems(props) {
    return (
      <div className={s.wrapper}>
        <img className={s.img} src={props.thumbnail} alt="Icon" />
        <h4 className={s.title}>{props.title}</h4>
        <div className={s.options}>
          <button className={s.arrowTop}>
            <img src={arrowTop} alt="Icon" className={s.iconTop} />
          </button>
          <button className={s.arrowBot}>
            <img src={arrowBot} alt="Icon" className={s.iconBot}/>
          </button>
        </div>
      </div>
    );
  }
  
  export default MenuItems;