import './Teacher.scss';
import {ReactComponent as Instagram} from '../../images/instagram.svg';
import {ReactComponent as Facebook} from '../../images/facebook.svg';
import {ReactComponent as Telegram} from "../../images/telegram.svg";
export function Teacher(props) {
    const { desc, name, job, links, img } = props;
    return (
      <li className="teacher">
        <img
          width="310"
          height="310"
          src={img}
          alt=""
          className="teacher__img"
        />
        <div className="teacher__desc">
          <div className="teacher__info">
            <h3 className="teacher__name">{name}</h3>
            <span className="teacher__job">{job}</span>
          </div>
          {desc}
          <div className="teacher__contact">
            <a href={'#'} className="teacher__link">
              <Telegram className="teacher__contact--img" />
            </a>
            <a href={'#'} className="teacher__link">
              <Instagram className="teacher__contact--img" />
            </a>
            <a href={'#'} className="teacher__link">
              <Facebook className="teacher__contact--img" />
            </a>
          </div>
        </div>
      </li>
    );
    
}