import s from "./Label.module.css";


function Label(props) {
    return (
      <div className="lebel">
        <span className={s.label}>{props.labelText}</span>
      </div>
    );
  }
  
  export default Label;