import './Teacher.scss';
import insta from '../../images/instagram.svg';
import face from '../../images/facebook.svg';
import tele from "../../images/telegram.svg";
export function Teacher(props) {
    const { desc, name, job, links, img } = props;
    return (
        <li className="teacher">
            <img width= "310" height = "310" src={img} alt="" className="teacher__img" />
            <div className="teacher__desc">
                <div className="teacher__info">
                    <h3 className="teacher__name">{ name }</h3>
                    <span className="teacher__job">{ job }</span>
                </div>
                {desc}
                <div className="teacher__contact">
                    <a href={links.telegram} className="teacher__link"><img src={tele} alt="" className="teacher__contact--img" /></a>
                    <a href={links.facebook} className="teacher__link"><img src={face} alt="" className="teacher__contact--img" /></a>
                    <a href={links.instagram} className="teacher__link"><img src={insta} alt="" className="teacher__contact--img" /></a>
                </div>
            </div>
        </li>
    )
    
}