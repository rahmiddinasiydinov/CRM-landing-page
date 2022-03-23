import { createContext, Component, useState } from "react";
import App from "../App";

const language = {
  uz: {
    main: "Bosh sahifa",
    about: "Biz haqimizda",
    contact: "Kontakt",
    course: "Kurslarimiz",
    news: "Yangiliklar",
    enter: "Kirish",
    main_title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    main_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    main_btn: "Kurs Tanlash",
    about_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    about_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum accumsan augue integer neque suspendisse. Lacus viverra urna aliquam elementum urna maecenas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus?",
    teacher: "O'qituvchilar",
    students: "O'quvchilar",
    courses: "Kurslar",
    online_courses: "Onlayn kurslar",
    our_teachers: "Bizning o'qituvchilarimiz",
    student_points: "O'quvchilarimiz fikri",
    news_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, fermentum ultrices in sed neque interdum aliquam. Pretium nibh aliquet lectus mattis cras vulputate arcu consequat. Arcu pharetra auctor odio risus vivamus nisi, ac est. Felis tellus sed ut ac. Rutrum venenatis a mi amet nulla sit at lacus nisi.",
    contact_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contact_name: "Ism Familyangiz",
    contact_tel: "Telefon raqamingiz",
    send: "Yuborish",
  },
  ru: {
    main: "Домашняя страница",
    about: "О нас",
    contact:"Контакт",
    course: "Наши курсы",
    news: "Новости",
    enter: "Войти",
    main_title:
      "Далеко-далеко, за словесными горами в стране гласных и согласных",
    main_text:
      "Далеко-далеко, за словесными горами в стране гласных и согласных",
    main_btn: "Выберите курс",
    about_title:
      "Далеко-далеко, за словесными горами в стране гласных и согласных",
    about_text:
      " Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Силуэт домах, подпоясал которой взобравшись единственное деревни курсивных залетают рекламных.",
    teacher: "учителей",
    students: "студентов",
    courses: "офлайн-курсов",
    online_courses: "онлайн-курсов",
    our_teachers: "Наши учителя",
    student_points: "Мнение студентов",
    news_text:
      " Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Силуэт домах, подпоясал которой взобравшись единственное деревни курсивных залетают рекламных. Силуэт домах, подпоясал которой взобравшись единственное деревни курсивных залетают рекламных.",
    contact_title:
      "Далеко-далеко, за словесными горами в стране гласных и согласных",
    contact_name: "Полное имя",
    contact_tel: "Телефонный номер",
    send: "Отправлять",
  },
  en: {
    main: "Home page",
    about: "About us",
    contact: "Contact",
    course: "Our Courses",
    news: "News",
    enter: "Enter",
    main_title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    main_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    main_btn: "Choose a course",
    about_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    about_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum accumsan augue integer neque suspendisse. Lacus viverra urna aliquam elementum urna maecenas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus?",
    teacher: "Teachers",
    students: "Students",
    courses: "Offline courses",
    online_courses: "Online courses",
    our_teachers: "Our Teachers",
    student_points: "Students' opinion",
    news_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, fermentum ultrices in sed neque interdum aliquam. Pretium nibh aliquet lectus mattis cras vulputate arcu consequat. Arcu pharetra auctor odio risus vivamus nisi, ac est. Felis tellus sed ut ac. Rutrum venenatis a mi amet nulla sit at lacus nisi.",
    contact_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contact_name: "Full name",
    contact_tel: "Phone number",
    send: "Send",
  },
};

export const ThemeContext = createContext(language.uz);
function ThemeContextComponent() {
    const [lang, changeLang] = useState('uz');
    const state = {
        lang: language[lang], 
        changeLang
    }
    
    return (<ThemeContext.Provider value={state}>
        <App />
       
        </ThemeContext.Provider>)
    }
    
    export default ThemeContextComponent;
    