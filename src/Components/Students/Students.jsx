import students from './students.json';
import './Students.scss';
import student1 from '../../images/student1.png';
import student2 from '../../images/student2.png';
import student3 from "../../images/student3.png";
import arrow from '../../images/arrow.svg';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../Contexts/Context';



export function Students(props) {
   const {lang} = useContext(ThemeContext)
    const img = [student1, student2, student3];
    const [currentSlide, setCurrentSlide] = useState(1);
 
    let length = students.length;
    return (
      <div className="student">
        <div className="container">
          <h2 className="student__title">{lang.student_points}</h2>
          <ul className="student__list">
            <button
              className={`student__arrow--left ${
                currentSlide === 0 ? "arrow__disabled" : ""
              }`}
              onClick={(e) =>
                currentSlide > 0
                  ? setCurrentSlide(currentSlide - 1)
                  : currentSlide
              }
            >
              <img src={arrow} alt="" className="arrow__left" />
            </button>
            <button
              className={`student__arrow--right ${
                currentSlide === length - 1 ? "arrow__disabled" : ""
              }`}
              onClick={(e) =>
                currentSlide !== length - 1
                  ? setCurrentSlide(currentSlide + 1)
                  : currentSlide
              }
            >
              <img src={arrow} alt="" className="arrow__right" />
            </button>
            <li className="student__item">
              {students[currentSlide - 1] ? (
                <>
                  <img
                    src={img[students[currentSlide - 1].image - 1]}
                    alt="img"
                    className="student__img"
                  />

                  <span className="student__name">
                    {students[currentSlide - 1].name}
                  </span>
                </>
              ) : (
                ""
              )}
            </li>
            <li className="student__item student__item--main">
              {" "}
              <img
                src={img[students[currentSlide].image - 1]}
                alt="img"
                className="student__img--main"
              />
              <div className="student__info">
                <h3 className="student__name--main">
                  {students[currentSlide].name}
                </h3>
                <p className="student__text">{students[currentSlide].text}</p>
              </div>
            </li>
            <li className="student__item">
              {students[currentSlide + 1] ? (
                <>
                  <img
                    src={img[students[currentSlide + 1].image - 1]}
                    alt="img"
                    className="student__img"
                  />
                  <span className="student__name">
                    {students[currentSlide + 1].name}
                  </span>
                </>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    );
}