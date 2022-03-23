import './Home.scss';
import about from '../../images/aboutuz.png';
import { Results } from '../../Components/Results/Results';
import { Teacher } from '../../Components/Teachers/Teacher';
import { Students } from '../../Components/Students/Students';
import { Subject } from '../../Components/Subjects/Subjects';
import teacher1 from '../../images/teacher1.png';
import teacher2 from '../../images/teacher2.png';
import teacher3 from '../../images/teacher3.png';
import teacher4 from "../../images/teacher4.png";
import subject from '../../images/subject.png';
import news from '../../images/news.png';
import teacher_subject from '../../images/teacher.png';
import telegram from "../../images/telegram.svg";
import instagram from "../../images/instagram.svg";
import facebook from '../../images/facebook.svg';
import phone from '../../images/phone.png';


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from 'swiper';
import {  Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ThemeContext } from '../../Contexts/Context';
import { useContext } from 'react';

function Home(props){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const { lang, changeLang } = useContext(ThemeContext)
    return (
      <div className="home">
        <header id="1" className="home__heaeder">
          <div className="container">
            <div className="home__header--left">
              <h1 className="home__header--title">{lang.main_title}</h1>
              <div className="home__header--text">{lang.main_text}</div>
              <a href="#" className="home__header--btn">
                {lang.main_btn}
              </a>
            </div>
          </div>
        </header>
        <main>
          <section id="2" className="home__about">
            <div className="container">
              <h2 className="home__about--title">{lang.about}</h2>
              <div className="home__about--wrapper">
                <div className="home__about--left">
                  <div className="line__group">
                    <div className="line__first"></div>
                    <div className="line__second line__left"></div>
                  </div>
                  <img
                    src={about}
                    alt="About Us"
                    className="home__about--img"
                  />
                  <div className="line__group">
                    <div className="line__second line__light line__right"></div>
                    <div className="line__first line__light"></div>
                  </div>
                </div>
                <div className="home__about--right">
                  <h3 className="home__about--subtitle">{lang.about_title}</h3>
                  <div className="home__about--text">
                    {lang.about_text}
                    <br />
                    <br />
                    {lang.about_text}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home__results">
            <div className="container">
              <div className="home__results--list">
                <Results num={60} people={lang.teacher} />
                <Results num={926} people={lang.students} />
                <Results num={25} people={lang.online_courses} />
                <Results num={60} people={lang.courses} />
              </div>
            </div>
          </section>
          <section className="home__teachers">
            <div className="container">
              <h2 className="home__teachers--title">{ lang.our_teachers}</h2>
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={window.screen.width > 768 ? 150 : 100}
                slidesPerView={"auto"}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                //   className="home__teachers--list"
              >
                <SwiperSlide>
                  <Teacher
                    name={"Azizova Umida"}
                    job={"Ona-tili, Adabiyot"}
                    links={{
                      telegram: "telegram",
                      instagram: "instagram",
                      facebook: "faceboook",
                    }}
                    desc={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, inventore."
                    }
                    img={teacher1}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Teacher
                    name={"Muxamadaliyev Ibroxim"}
                    job={"Matematika "}
                    links={{
                      telegram: "telegram",
                      instagram: "instagram",
                      facebook: "faceboook",
                    }}
                    desc={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, inventore."
                    }
                    img={teacher2}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Teacher
                    name={"Ergashev Sirojiddin"}
                    job={"Informatika"}
                    links={{
                      telegram: "telegram",
                      instagram: "instagram",
                      facebook: "faceboook",
                    }}
                    desc={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, inventore."
                    }
                    img={teacher3}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Teacher
                    name={"Muqimov Otabek"}
                    job={"Tarix"}
                    links={{
                      telegram: "telegram",
                      instagram: "instagram",
                      facebook: "faceboook",
                    }}
                    desc={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, inventore."
                    }
                    img={teacher4}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Teacher
                    name={"Azizova Umida"}
                    job={"Ona-tili, Adabiyot"}
                    links={{
                      telegram: "telegram",
                      instagram: "instagram",
                      facebook: "faceboook",
                    }}
                    desc={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, inventore."
                    }
                    img={teacher1}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Teacher
                    name={"Muxamadaliyev Ibroxim"}
                    job={"Matematika "}
                    links={{
                      telegram: "telegram",
                      instagram: "instagram",
                      facebook: "faceboook",
                    }}
                    desc={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, inventore."
                    }
                    img={teacher2}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <Students />
          <section id="3" className="home__subjects">
            <div className="container home__subjects--tablet">
              <h2 className="home__subjects--title">{lang.course}</h2>
              <Swiper
                modules={[EffectCoverflow, Pagination]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                pagination={{ clickable: true }}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                className="mySwiper"
              >
                {arr.map((e, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Subject
                        img={subject}
                        desc={
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis laoreet congue ut eu id."
                        }
                        subject={"Matematika"}
                        name={"Muxamadaliyev Ibroxim"}
                        teacher_img={teacher_subject}
                        job={"Mentor"}
                        duration={10}
                        price={200000}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
          <section id="4" className="home__news">
            <div className="container">
              <h2 className="news__title">{ lang.news}</h2>
              <div className="news__box">
                <div className="news__wrapper">
                  <div className="news__img--wrapper">
                    <div className="line__group">
                      <span className="news__line--first line__right"></span>
                      <span className="news__line--second"></span>
                    </div>
                    <img src={news} alt="" className="news__img" />
                    <div className="line__group">
                      <span className="news__line--second line__light"></span>
                      <span className="news__line--first line__left line__light"></span>
                    </div>
                  </div>
                  <p className="news__text">
                    {lang.news_text}
                  </p>
                </div>
                <div className="news__wrapper">
                  <p className="news__text">
                    {lang.news_text}
                  </p>
                  <div className="news__img--wrapper">
                    <div className="line__group">
                      <span className="news__line--first line__right"></span>
                      <span className="news__line--second"></span>
                    </div>
                    <img src={news} alt="" className="news__img" />
                    <div className="line__group">
                      <span className="news__line--second line__light"></span>
                      <span className="news__line--first line__left line__light"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="5" className="home__contact">
            <div className="container">
              <div className="home__contact--wrapper">
                <form action="#" className="home__contact--form">
                  <h3 className="home__contact--subtitle">
                    {lang.contact_title}
                  </h3>
                  <input
                    type="text"
                    className="home__contact--input"
                    placeholder={lang.contact_name}
                  />
                  <input
                    type="tel"
                    className="home__contact--input"
                    placeholder={lang.contact_tel}
                  />

                  <button type="submit" className="home__contact--submit">
                    {lang.send}
                  </button>
                </form>
                <h2 className="home__contact--title">{ lang.contact}</h2>
              </div>
            </div>
          </section>
        </main>
        <footer className="home__footer">
          <div className="container">
            <div className="home__footer--wrapper">
              <ul className="home__footer--social">
                <li className="home__footer--item">
                  <a href="#0" className="home__footer--link landing">
                     {lang.main}
                  </a>
                  <a href="#2" className="home__footer--link landing">
                   {lang.about}
                  </a>
                  <a href="#3" className="home__footer--link landing">
                    {lang.course}
                  </a>
                  <a href="#4" className="home__footer--link landing">
                    {lang.news}
                  </a>
                  <a href="#5" className="home__footer--link landing">
                   {lang.contact}
                  </a>
                </li>
                <li className="home__footer--item">
                  <span className="home__footer--media">
                    <a href="#" className="home__footer--link">
                      {" "}
                      <img
                        src={telegram}
                        alt=""
                        className="home__footer--img"
                      />{" "}
                    </a>
                  </span>
                  <span className="home__footer--media">
                    <a href="#" className="home__footer--link">
                      {" "}
                      <img
                        src={facebook}
                        alt=""
                        className="home__footer--img"
                      />{" "}
                    </a>
                  </span>
                  <span className="home__footer--media">
                    <a href="#" className="home__footer--link">
                      {" "}
                      <img
                        src={instagram}
                        alt=""
                        className="home__footer--img"
                      />{" "}
                    </a>
                  </span>
                </li>
              </ul>
              <a href="tel:+998900113861" className="home__footer--tel">
                <img src={phone} alt="" className="home__footer--img" />{" "}
                +998900113861
              </a>
            </div>
            <span className="home__footer--copyright">&copy;Copyright2022</span>
          </div>
        </footer>
      </div>
    );
}

export default Home;

