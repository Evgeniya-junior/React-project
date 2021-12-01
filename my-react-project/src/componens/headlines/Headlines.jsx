import s from "./Headlines.module.css";

import image1 from "./../../assets/images/image 1.jpg";
import iconLike from "./../../assets/images/icon-like.svg";
import iconDislike from "./../../assets/images/icon-dislike.svg";

import Label from "../label/Label";
import Time from "../time/Time";


function Headlines(props) {
    return (
      <article class={s.headlines}>
        <img className={s.thumbnail} src={props.thumbnail} alt="Photo news"  />
        <div className={s.info}>
          <h1 className={s.title}>{props.title}</h1>
          <div className={s.rating}>
            <div className={s.like}>
              <img className={s.likeIcon} src={iconLike} alt="Icon like" />
              <span className={s.likeText}>10.8</span>
            </div>
            <div className={s.dislike}>
              <img className={s.dislikeIcon} src={iconDislike} alt="Icon dislike" />
              <span className={s.dislikeText}>10.8</span>
            </div>
          </div>
          <div className={s.wrapper}>
            <Label labelText={props.labelText}/>
            <Time/>
          </div>
        </div>
          
      </article>
      
    );
  }
  
  export default Headlines;