import { useTranslation} from 'react-i18next';
import './Footer.css';

const handleScrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
   };

function Footer() {
	const { t } = useTranslation();
   	return (
		<footer className="footer">
			<div className="footer-copyright">
				Copyright - Alisa Neuber - 2026
			</div>
			<button onClick={handleScrollToTop} className="footer-button">
				{t('description.footer_link')}
			</button>
		</footer>  
   	)
}
	
export default Footer;