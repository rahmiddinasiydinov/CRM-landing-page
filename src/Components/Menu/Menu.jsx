import { slide as Menu } from 'react-burger-menu';
import './Menu.scss';
import { ThemeContext } from '../../Contexts/Context';
import { useContext } from 'react';
export function Hamburger() {
    const {lang} = useContext(ThemeContext)

    return (
      <Menu>
        <a id="home" className="menu-item" href="#0">
          LOGO
        </a>
        <a id="home" className="menu-item" href="#0">
          {lang.main}
        </a>
        <a id="about" className="menu-item" href="#2">
          {lang.about}
        </a>
        <a id="courses" className="menu-item" href="#3">
          {lang.course}
        </a>
        <a id="news" className="menu-item" href="#4">
          {lang.news}
        </a>
        {window.screen.width < 425 ? (
          <a id="phone" href="tel:+998900113861" className="menu-item">
            +998900113861
          </a>
        ) : (
          ""
        )}
        <a id="contact" className="menu-item--small" href="#5">
         {lang.contact}
        </a>
      </Menu>
    );
}