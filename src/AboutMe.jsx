import { useTranslation} from 'react-i18next';
import {useState} from 'react';
import './AboutMe.css';
import birdImg from './assets/bird.png';
import sewImg from './assets/sew.png';
import artImg from './assets/art.png';
import sportImg from './assets/sport.png';


function Slideshow({images, texts, alts}) {
   const [currentIndex, setCurrentIndex] = useState(0);
   
	const goToNextSlide = () => {
      if (currentIndex < images.length - 1)
		   setCurrentIndex(currentIndex => currentIndex + 1);
      if (currentIndex == images.length - 1)
         setCurrentIndex(0);
	};

	const goToPreviousSlide = () => {
		if (currentIndex > 0)
		   setCurrentIndex(currentIndex => currentIndex - 1);
      if (currentIndex == 0)
         setCurrentIndex(images.length - 1);
	};
	return (
		<div className="slideshow-container" aria-label="Slideshow">
            <div className="slideshow-button">
                <button onClick={goToPreviousSlide} aria-label="Left">&#8656;</button>
            </div>

            <Card image={images[currentIndex]} text={texts[currentIndex]} alt={alts[currentIndex]}/>

            <div className="slideshow-button">
                <button onClick={goToNextSlide} aria-label="Right">&#8658;</button>
            </div>
		</div>
	)
}

function Card({image, text, alt}) {
   const [isFlipped, setFlipped] = useState(false);

   const handleFlip = () => {
        setFlipped(!isFlipped);
   };

    return (
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`} >
         <div className="flip-card-inner">
            <div className="flip-card-front">
               <figure className="card-content">
                  <img src={image} alt={alt}/>
               </figure>
               <button className="flip-button" onClick={handleFlip}>Flip Me!</button>
            </div>
            <div className="flip-card-back">
               <div className="card-content">
                  <div className="card-text">
                     {text}
                  </div>
               </div>
               <button className="flip-button" onClick={handleFlip} aria-label="Flip Card">Flip Me!</button>
            </div>
         </div>
      </div>
    )
}


function AboutMe() { 
   const { t } = useTranslation();

   const images = [
   birdImg,
   sewImg,
   artImg,
   sportImg
   ]
   const texts = [
      t("description.aboutme_card1"),
      t("description.aboutme_card2"),
      t("description.aboutme_card3"),
      t("description.aboutme_card4"),
   ]
   const alts = [
      t("description.aboutme_card1_img_alt"),
      t("description.aboutme_card2_img_alt"),
      t("description.aboutme_card3_img_alt"),
      t("description.aboutme_card4_img_alt"),
   ]
   return (
      <main className="aboutme-main">
         <h2 className="aboutme-header">
            {t("description.aboutme_header")}
         </h2> 
         
         <section className="aboutme-section">
            <div className="aboutme-subheader">
               <p>
                  {t("description.aboutme_subheader1")}
               </p>
            </div>
            <div className="aboutme-text">
               <p>
                  {t("description.aboutme_text1")}
               </p>
               <p>
                  {t("description.aboutme_text2")}
               </p>
               <p>
                  {t("description.aboutme_text3")}
               </p>
            </div>     
         </section>

         <section className="aboutme-section">
            <div className="aboutme-subheader">
               <p>
                  {t("description.aboutme_subheader2")}
               </p>
            </div>
            <div className="aboutme-hobby-slideshow">
               <Slideshow images={images} texts={texts} alts={alts} /> 
            </div> 
         </section>

      </main>  
    )
}
 
export default AboutMe;