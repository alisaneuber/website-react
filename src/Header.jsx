import { useTranslation } from 'react-i18next';
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
               <a href="/">{t('description.header_home')}</a>
               <a href="/portfolio">{t('description.header_portfolio')}</a>
               <a href="/about">{t('description.header_aboutme')}</a>
               <a href="/contact">{t('description.header_contact')}</a>
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