import './Admin.scss';
import logo from '../../images/logo.png'
import uzb from '../../images/uzb.png';
import rus from '../../images/rus.png';
import eng from '../../images/eng.png';
import login from '../../images/login.png'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Contexts/Context';
import { useContext } from 'react';
export function Admin(props) {
  const { lang, changeLang } = useContext(ThemeContext);
  const handleLogin = e => {
    e.preventDefault();
    const {name, password} = e.target.elements;
    fetch("https://crm-joygroup.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        admin_name: name.value, 
        admin_password:password.value
      })
    })
      .then(res => res.json())
      .then(message => {
        if (message.status == 200) {
          window.location.href = "https://heroic-mochi-ebe693.netlify.app/";
        }
      });

  }
    return (
      <div className="login">
        <div className="login__wrapper">
          <div className="login__language">
            <img
              src={lang.id === "uz" ? uzb : lang.id === "ru" ? rus : eng}
              width={24}
              height={18}
              alt=""
              className="login__flag"
            />
            <select
              defaultValue={lang.id}
              className="login__language--text"
              onChange={(e) => {
                changeLang(e.target.value);
              }}
            >
              <option value="uz" className="login__language--option">
                O'zbek
              </option>
              <option value="ru" className="login__language--option">
                Русский
              </option>
              <option value="en" className="login__language--option">
                English
              </option>
            </select>
          </div>
          <div className="login__left">
            <div className="login__edu--center">
              <img src={logo} alt="" className="login__edu--logo" />
              <span className="login__edu--name">Joy Academy</span>
            </div>
            <h2 className="login__title">{lang.system_enter}</h2>
            <form className="login__form" onSubmit={handleLogin}>
              <input
                type="text"
                name='name'
                className="login__email"
                placeholder={lang.name}
              />
              <span className="login__email--valid"></span>
              <input
                type="password"
                name='password'
                className="login__password"
                placeholder={lang.password}
              />
              <span className="login__password--valid"></span>
              <span className="login__forgot">{lang.forgot}</span>
              <button type="submit" className="login__btn">
                {lang.enter}
              </button>
            </form>
          </div>
          <div className="login__right">
            <Link className="login__back" to="/">
              {lang.main_page}
            </Link>

            <div className="login__admin">
              <div className="login__admin--title">{lang.administrator}</div>
              <img src={login} alt="" className="login__admi--img" />
            </div>
          </div>
        </div>
      </div>
    );
}