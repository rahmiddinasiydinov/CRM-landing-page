import { NavLink } from 'react-router-dom';
import './App.scss';
import phoneIcon from './images/phone.png';
import Home from './Pages/Home/Home';
import { Admin } from './Pages/AdminPanel/Admin';
import { Route, Routes } from 'react-router';
import { Hamburger } from './Components/Menu/Menu';
import { ThemeContext } from './Contexts/Context';
import { useContext } from 'react';

function App() {

  const {lang, changeLang} = useContext(ThemeContext)
  return (
    <div className="App">
      <div className="hamburger-wrapper">
        <Hamburger className="hamburger" />
      </div>
      <header className="App-header" id="0">
        <div className="circle"></div>
        <div className="header">
          <div className="container header__wrapper">
            <div className="header__links">
              <ul className="header__links--list">
                <li className="header__links--item logo">
                  <NavLink to="/">LOGO</NavLink>
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
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
