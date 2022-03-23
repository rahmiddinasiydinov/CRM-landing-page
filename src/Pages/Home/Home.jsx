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

function Home(props){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div className="home">
        <header id="1" className="home__heaeder">
          <div className="container">
            <div className="home__header--left">
              <h1 className="home__header--title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <div className="home__header--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <a href="#" className="home__header--btn">
                Kurs tanlash
              </a>
            </div>
          </div>
        </header>
        <main>
          <section id="2" className="home__about">
            <div className="container">
              <h2 className="home__about--title">Biz haqimizda</h2>
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
                  <h3 className="home__about--subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <div className="home__about--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Bibendum accumsan augue integer neque suspendisse. Lacus
                    viverra urna aliquam elementum urna maecenas. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quos,
                    temporibus?
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Bibendum accumsan augue integer neque suspendisse. Lacus
                    viverra urna aliquam elementum urna maecenas. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Optio,
                    voluptas.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home__results">
            <div className="container">
              <div className="home__results--list">
                <Results num={60} people={"O'qituvchilar"} />
                <Results num={926} people={"O'quvchilar"} />
                <Results num={25} people={"Onlayn kurslar"} />
                <Results num={60} people={"Oflayn kurslar"} />
              </div>
            </div>
          </section>
          <section className="home__teachers">
            <div className="container">
              <h2 className="home__teachers--title">Bizning o’qituvchilar</h2>
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
              <h2 className="home__subjects--title">Kurslarimiz</h2>
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
              <h2 className="news__title">Yangiliklar</h2>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisl, fermentum ultrices in sed neque interdum aliquam.
                    Pretium nibh aliquet lectus mattis cras vulputate arcu
                    consequat. Arcu pharetra auctor odio risus vivamus nisi, ac
                    est. Felis tellus sed ut ac. Rutrum venenatis a mi amet
                    nulla sit at lacus nisi.
                  </p>
                </div>
                <div className="news__wrapper">
                  <p className="news__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisl, fermentum ultrices in sed neque interdum aliquam.
                    Pretium nibh aliquet lectus mattis cras vulputate arcu
                    consequat. Arcu pharetra auctor odio risus vivamus nisi, ac
                    est. Felis tellus sed ut ac. Rutrum venenatis a mi amet
                    nulla sit at lacus nisi.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <input
                    type="text"
                    className="home__contact--input"
                    placeholder="Ism familyangiz"
                  />
                  <input
                    type="tel"
                    className="home__contact--input"
                    placeholder="Telefon raqamingiz"
                  />

                  <button type="submit" className="home__contact--submit">
                    Yuborish
                  </button>
                </form>
                <h2 className="home__contact--title">Kontakt</h2>
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
                    Bosh sahifa
                  </a>
                  <a href="#2" className="home__footer--link landing">
                    Biz haqimizda
                  </a>
                  <a href="#3" className="home__footer--link landing">
                    kurslarimiz
                  </a>
                  <a href="#4" className="home__footer--link landing">
                    Yangiliklar
                  </a>
                  <a href="#5" className="home__footer--link landing">
                    Kontakt
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

