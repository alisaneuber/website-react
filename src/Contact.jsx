import { useTranslation} from 'react-i18next';

import './Contact.css';
import linkedinIconImg from './assets/linkedinIcon.svg';
import githubIconImg from './assets/githubIcon.svg';
import itchioIconImg from './assets/itchioIcon.svg';



function Contact() { 
   const { t } = useTranslation();

   return (
      <main className="contact-main">
         <h2 className="contact-header">
            {t("description.contact_header")}
         </h2> 

         <section>
            <div className="contact-subheader">
               <p>
                  {t("description.contact_subtitle")}
               </p>
            </div>

            <div className="contact-content">
               <div className="contact-link-container">

                  <div className="contact-link">
                     <a href="https://www.linkedin.com/in/alisa-neuber-28a0a6276/" target="_blank" rel="noreferrer">
                        <img className="contact-image"
                           src={linkedinIconImg}
                           alt="Linkedin icon"
                        />
                     </a>
                     <div className="contact-text">
                        LinkedIn
                     </div>
                  </div>

                  <div className="contact-link">
                     <a href="https://github.com/alisaneuber" target="_blank" rel="noreferrer">
                        <img className="contact-image"
                           src={githubIconImg}
                           alt="Github icon"
                        />
                     </a>
                     <div className="contact-text">
                        Github
                     </div>
                  </div>

                  <div className="contact-link">
                     <a href="https://cookie-oo.itch.io/" target="_blank" rel="noreferrer">
                        <img className="contact-image"ö
                           src={itchioIconImg}
                           alt="Itch.io icon"
                        />
                     </a>
                     <div className="contact-text">
                        Itch.io
                     </div>
                  </div>
               </div>
            </div>

            <div className="contact-form">
               {t("description.contact_subtitle2")}
            </div>
         </section>
      </main>  
    )
}
 
export default Contact;