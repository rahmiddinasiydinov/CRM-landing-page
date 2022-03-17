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

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from 'swiper';
import {  Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Home(props){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div className="home">
        <div className="home__heaeder">
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
        </div>
        <div className="home__about">
          <div className="container">
            <h2 className="home__about--title">Biz haqimizda</h2>
            <div className="home__about--wrapper">
              <div className="home__about--left">
                <div className="line__group">
                  <div className="line__first"></div>
                  <div className="line__second line__left"></div>
                </div>
                <img src={about} alt="About Us" className="home__about--img" />
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
                  dolor sit amet consectetur adipisicing elit. Quos, temporibus?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Bibendum accumsan augue integer neque suspendisse. Lacus
                  viverra urna aliquam elementum urna maecenas. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Optio, voluptas.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__results">
          <div className="container">
            <div className="home__results--list">
              <Results num={60} people={"O'qituvchilar"} />
              <Results num={926} people={"O'quvchilar"} />
              <Results num={25} people={"Onlayn kurslar"} />
              <Results num={60} people={"Oflayn kurslar"} />
            </div>
          </div>
        </div>
        <div className="home__teachers">
          <div className="container">
            <h2 className="home__teachers--title">Bizning o’qituvchilar</h2>
            <Swiper
              modules={[Pagination]}
              spaceBetween={150}
              slidesPerView={4}
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
        </div>
        <Students />
        <div className="home__subjects">
          <div className="container">
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
              {arr.map((e) => {
                return (
                  <SwiperSlide>
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
        </div>
        <div className="home__news">
          <div className="container">
            <h2 className="news__title">Yangiliklar</h2>
            <div className="news__wrapper">
              <div className="news__img--wrapper">
                <div className="line__group">
                  <span className="news__line--first line__right"></span>
                  <span className="news__line--second"></span>
                </div>
                <img src={news} alt="" className="news__img" />
                <div className="line__group">
                  <span className="news__line--second"></span>
                  <span className="news__line--first line__left"></span>
                </div>
              </div>
              <p className="news__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl,
                fermentum ultrices in sed neque interdum aliquam. Pretium nibh
                aliquet lectus mattis cras vulputate arcu consequat. Arcu
                pharetra auctor odio risus vivamus nisi, ac est. Felis tellus
                sed ut ac. Rutrum venenatis a mi amet nulla sit at lacus nisi.
              </p>
            </div>
            <div className="news__wrapper">
              <p className="news__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl,
                fermentum ultrices in sed neque interdum aliquam. Pretium nibh
                aliquet lectus mattis cras vulputate arcu consequat. Arcu
                pharetra auctor odio risus vivamus nisi, ac est. Felis tellus
                sed ut ac. Rutrum venenatis a mi amet nulla sit at lacus nisi.
              </p>
              <div className="news__img--wrapper">
                <div className="line__group">
                  <span className="news__line--first line__right"></span>
                  <span className="news__line--second"></span>
                </div>
                <img src={news} alt="" className="news__img" />
                <div className="line__group">
                  <span className="news__line--second"></span>
                  <span className="news__line--first line__left"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;

