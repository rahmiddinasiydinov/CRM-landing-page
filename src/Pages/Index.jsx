import './Index.scss';
import { NavLink } from "react-router-dom";
import phoneIcon from "../images/phone.svg";
import Home from "./Home/Home";
import { Hamburger } from "../Components/Menu/Menu";
import { ThemeContext } from "../Contexts/Context";
import { useContext, useRef } from "react";
import logo from '../images/logo.png';
import arrow from '../images/arrow.svg'
function Index() {
    const { lang, changeLang } = useContext(ThemeContext);
    const top = useRef();
    const handeScroll = e => {
     console.log('hello I am Working');     
    }
    function findScroller(element) {
      element.onscroll = function () {
        window.scrollY > 1000
          ? top.current.classList.add("top__active")
          : top.current.classList.remove("top__active");
      };

      Array.from(element.children).forEach(findScroller);
    }

    findScroller(document.body);
  return (
      <div className="App">
      <div className="hamburger-wrapper">
        <Hamburger className="hamburger"/>
          </div>
          <a href='#0' ref={top} className={`top`}>
              <img src={arrow} alt="top" className='top__arrow' />
              {lang.top}
        </a>
      <header className="App-header" id="0">
        <div className="header">
          <div className="container header__wrapper">
            <div className="header__links">
              <ul className="header__links--list">
                <li className="header__links--item logo">
                  <NavLink to="/"><img src={logo} alt="" className="header__logo" /></NavLink>
                </li>
                <li className="header__links--item">
                  <a href="#0" className="header__links--link">
                    {lang.main}
                  </a>
                </li>
                <li className="header__links--item">
                  <a href="#2" className="header__links--link">
                    {lang.about}
                  </a>
                </li>
                <li className="header__links--item">
                  <a href="#3" className="header__links--link">
                    {lang.course}
                  </a>
                </li>
                <li className="header__links--item">
                  <a href="#4" className="header__links--link">
                    {lang.news}
                  </a>
                </li>
                <li className="header__links--item">
                  <a href="#5" className="header__links--link">
                    {lang.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__contact">
              <ul className="header__contact--list">
                <li className="header__contact--item">
                  <a href="tel:+998900113861" className="header__contact--tel">
                    <img
                      src={phoneIcon}
                      alt=""
                      className="header__contact--phone"
                    />{" "}
                    +998900113861
                  </a>
                </li>
                <li className="header__contact--item">
                  <NavLink className="header__contact--admin" to="/admin">
                    {lang.enter}
                  </NavLink>
                </li>
                <li className="header__contact--item">
                  <select
                    defaultValue={lang.id}
                    name="language"
                    id="lang"
                    className="header__contact--lang"
                    onChange={(e) => {
                      changeLang(e.target.value);
                    }}
                  >
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
          </header>
          <Home/>

    </div>
  );
}

export default Index;
