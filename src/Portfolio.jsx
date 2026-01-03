import { useTranslation} from 'react-i18next';
import './Portfolio.css';
import makeImg from './assets/make.png';
import forestImg from './assets/forest.png';
import ghostImg from './assets/ghost.png';
import inclusiveGamingImg from './assets/inclusivegaming.png';
import blindshellImg from './assets/blindshell.png';
import zooImg from './assets/zoo.png';
import ghost2Img from './assets/ghost2.png';

function Article({header, text, image, alt}) { 
   return (
      <p>
         <article className="portfolio-article">
            <div className="portfolio-text">
               <h3 className="project-header">
                  {header}
               </h3>
               <p className="project-text">
                  {text}
               </p>
            </div>

            <figure className="portfolio-image">
               <img className="project-image"
                  src={image} 
                  alt={alt}/>
            </figure>
         </article>
      </p>
   )
}

/**
   <Article 
      header = " ( )"
      text = ""
      image = {Img}
      alt = ""
   />
*/



function Portfolio() { 
   const { t } = useTranslation();
   return (
      <main className="portfolio-main">
         
         <h2 className="portfolio-header">
            {t("description.portfolio_header")}
         </h2> 

         <section className="portfolio-era">
            <div className="portfolio-era-header">
               <p>
                  {t("description.portfolio_era1_header")}
               </p>
            </div>

            <Article 
               header = {t("description.portfolio_article1_header")}
               text = {t("description.portfolio_article1_text")}
               image = {makeImg}
               alt = {t("description.portfolio_article1_img_alt")}
            />

            <Article 
               header = {t("description.portfolio_article2_header")}
               text = {t("description.portfolio_article2_text")}
               image = {forestImg}
               alt = {t("description.portfolio_article2_img_alt")}
            />

            <Article 
               header = {t("description.portfolio_article3_header")}
               text = {t("description.portfolio_article3_text")}
               image = {ghostImg}
               alt = {t("description.portfolio_article3_img_alt")}
            />
         </section>


         <section className="portfolio-era">
            <div className="portfolio-era-header">
               <p>
                  {t("description.portfolio_era2_header")}
               </p>
               <a href="https://inclusive-gaming.de/" target="_blank" rel="noreferrer">
                  <img className="portfolio-era-image"
                     src={inclusiveGamingImg}
                     alt={t("description.portfolio_era2_img_alt")}
                  />
               </a>
            </div>  

            <Article 
               header = {t("description.portfolio_article4_header")}
               text = {t("description.portfolio_article4_text")}
               image = {blindshellImg}
               alt = {t("description.portfolio_article4_img_alt")}
            />

            <Article 
               header = {t("description.portfolio_article5_header")}
               text = {t("description.portfolio_article5_text")}
               image = {zooImg}
               alt = {t("description.portfolio_article5_img_alt")}
            />

            <Article 
               header = {t("description.portfolio_article6_header")}
               text = {t("description.portfolio_article6_text")}
               image = {ghost2Img}
               alt = {t("description.portfolio_article6_img_alt")}
            />
         </section>
      </main>  
    )
}
 
export default Portfolio;