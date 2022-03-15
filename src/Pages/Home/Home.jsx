import './Home.scss';
import about from '../../images/aboutuz.png';
import { Results } from '../../Components/Results/Results';


function Home(props){

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
              <a href="" className="home__header--btn">
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
            <ul className="home__teachers--list"></ul>
          </div>
        </div>
      </div>
    );
}

export default Home;

