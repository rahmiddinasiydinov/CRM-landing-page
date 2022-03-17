import { NavLink } from 'react-router-dom';
import './App.scss';
import phoneIcon from './images/phone.png';
import Home from './Pages/Home/Home';
import { Admin } from './Pages/AdminPanel/Admin';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="circle"></div>
        <div className="header">
          <div className="container header__wrapper">
            <div className="header__links">
              <ul className="header__links--list">
                <li className="header__links--item logo"><NavLink to='/'>LOGO</NavLink></li>
                <li className="header__links--item">Bosh Sahifa</li>
                <li className="header__links--item">Biz haqimizda</li>
                <li className="header__links--item">Kurslarimiz</li>
                <li className="header__links--item">Yangiliklar</li>
                <li className="header__links--item">Kontakt</li>
              </ul>
            </div>
            <div className="header__contact">
              <ul className="header__contact--list">
                <li className="header__contact--item">
                  <a href="tel:+998900113861" className="header__contact--tel">
                    <img src={phoneIcon} alt="" className="header__contact--phone" /> +998900113861
                  </a>
                </li>
                <li className="header__contact--item"><NavLink className="header__contact--admin" to='/admin'>Kirish</NavLink></li>
                <li className="header__contact--item">
                  <select name="language" id="lang" className="header__contact--lang">
                    <option value="uz">UZ</option>
                    <option value="re">RU</option> 
                    <option value="en">EN</option>
                  </select></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
