import './Subjects.scss';
import star_yellow from "../../images/star_yellow.svg";
import star_grey from "../../images/star_grey.svg";
export function Subject(props) {
    const {img, job, subject, name, teacher_img, desc, duration, price } = props
    return (
      <li className="subject">
        <img src={img} alt="" width={262} height={172} className="subject__ing" />
        <h4 className="subject__title">{subject}</h4>
        <p className="subject__desc">{desc}</p>
                <span className="subject__speciality">{ job}</span>
        <div className="subject__teacher">
                <img src={teacher_img} alt="teacher_img" width={60} height={60} className="subject__teacher--img" />
          <div className="subject__teacher--info">
            <div className="subject__teacher--degree">
              Darajasi: {" "}
              <ul className="star__list">
                <li>
                  <img src={star_yellow} alt="" className="star" />
                </li>
                <li>
                  <img src={star_yellow} alt="" className="star" />
                </li>
                <li>
                  <img src={star_yellow} alt="" className="star" />
                </li>
                <li>
                  <img src={star_yellow} alt="" className="star" />
                </li>
                <li>
                  <img src={star_grey} alt="" className="star" />
                </li>
              </ul>
            </div>
            <span className="subject__teacher--name">{name}</span>
          </div>
            </div>
            <hr className="subject__line" />
        <div className="subject__about">
          <div className="subject__duration">
            Davomiyligi
            <span className="subject__duration--value">{duration} oy</span>
          </div>
          <div className="subject__duration">
            Narxi(oyiga)
            <span className="subject__duration--value">{price} so'm</span>
          </div>
        </div>
        <a href="#5" className="subject__btn">Ro’yxatdan o’tish</a>
      </li>
    );
}
