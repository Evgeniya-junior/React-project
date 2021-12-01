import s from "./Title.module.css";

function Title(props) {
    return (
        <div className={s.title}>
            <div className={s.titleBlock}>
                <h2 className={s.titleText}>{props.title}</h2>
            </div>
            <div className={s.titleLink}>
                <a className={s.link} href="#">See all</a>
            </div>
        </div>
        
        
    );
}

export default Title;