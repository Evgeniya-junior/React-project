import Label from "../label/Label";
import Subtitle from "../subtitle/Subtitle";
import Time from "../time/Time";
import s from "./News.module.css";

function News(props) {
    return (
        <article className={s.news}>
            <img  className={s.img} src={props.thumbnail} alt="" />
            <div className={s.content}>
                <Subtitle className={s.titleNews} title={props.title}/>
                <div className={s.wrapper}>
                    <Label className={s.label} labelText={props.labelText}/>
                    <Time/>
                </div>
            </div>
        </article>
    );
}

export default News;