import { useTranslation} from 'react-i18next';
import './Home.css';
import ghostImg from './assets/ghost.png';
import blindshellImg from './assets/blindshell.png';
import portraitImg from './assets/portrait.png';

function Home() { 
   const { t } = useTranslation();
   return (
      <main className="home-main">
         <h2 className="home-header">
            {t("description.home_header")}
         </h2> 
         <section>
            <div className="home-text">
               {t("description.home_subtitle")}
            </div>  
         </section> 

         <section className="home-section-left">
            <div className="home-left-text">
               {t("description.home_text1")}
            </div>
            <figure className="home-left-image">
               <img src={portraitImg} alt={t("description.home_img1_alt")}/>
            </figure>
         </section>

         <section className="home-section-right">
            <figure className="home-right-image">
               <img src={ghostImg} alt={t("description.home_img2_alt")}/>
            </figure>
            <div className="home-right-text">
               {t("description.home_text2")}
            </div>    
         </section>

         <section className="home-section-left">
            <div className="home-left-text">
               {t("description.home_text3")}
            </div>
            <figure className="home-left-image">
               <img src={blindshellImg} alt={t("description.home_img3_alt")}/>
            </figure>
         </section>
      </main>  
   )
}
 
export default Home;