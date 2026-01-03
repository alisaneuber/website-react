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
               <div className="navbar-link"><Link to="/">{t('description.header_home')}</Link></div>
               <div className="navbar-link"><Link to="/portfolio">{t('description.header_portfolio')}</Link></div>
               <div className="navbar-link"><Link to="/about">{t('description.header_aboutme')}</Link></div>
               <div className="navbar-link"><Link to="/contact">{t('description.header_contact')}</Link></div>
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