import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import './Header.css';
import enImg from './assets/en.png';
import deImg from './assets/de.png';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

function Header() {
   const { i18n, t } = useTranslation();
   return (
      <div className="navbar-header">
         <div className="navbar">
            <div className="navbar-left">
               <h1>{t('description.header_left')}</h1>
            </div>
            <nav className="navbar-right">
               <Link to="/" style={{ textDecoration: 'none' }}><div className="navbar-link">{t('description.header_home')}</div></Link>
               <Link to="/portfolio" style={{ textDecoration: 'none' }}><div className="navbar-link">{t('description.header_portfolio')}</div></Link>
               <Link to="/about" style={{ textDecoration: 'none' }}><div className="navbar-link">{t('description.header_aboutme')}</div></Link>
               <Link to="/contact" style={{ textDecoration: 'none' }}><div className="navbar-link">{t('description.header_contact')}</div></Link>
            </nav>
            <div className="navbar-language">
                  <button className="navbar-language-button" type="submit" onClick={() => i18n.changeLanguage("en")}>
                     <img 
                        src={enImg}
                        alt={t('description.header_enImg_alt')}
                     />
                     
                  </button>
                  <button className="navbar-language-button" type="submit" onClick={() => i18n.changeLanguage("de")}>
                     <img 
                        src={deImg}
                        alt={t('description.header_deImg_alt')}
                     />
                     
                  </button>
            </div>
         </div>
      </div>
   )
}
	
export default Header;