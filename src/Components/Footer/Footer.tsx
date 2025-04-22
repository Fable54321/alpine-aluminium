import styles from './Footer.module.css'
import facebook from '../../assets/images/facebook.png'
import gmail from '../../assets/images/gmail.png'
import instagram from '../../assets/images/instagram.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <h2>Alpine <span>Aluminium</span> inc.</h2>
      <ul className={styles["footer__list"]}>
        <li className={styles["footer__list__item1"]}>
          <Link className={styles["footer__list__link"]} to="/">
            Accueil
          </Link>
        </li>
        <li className={styles["footer__list__item2"]}>
          <Link className={styles["footer__list__link"]} to="/produits">
            Nos Produits
          </Link>
        </li>
        {/* <li className={styles["footer__list__item3"]}>
          <Link className={styles["footer__list__link"]} to="/produits">
            Notre équipe
          </Link>
        </li> */}

        <li className={styles["footer__list__item4"]}>
          <Link className={styles["footer__list__link"]} to="/contact">
            Contact
          </Link>
        </li>
      </ul> 

      <div className={styles["footer__social"]}>
        <a
          href="https://www.facebook.com/alpinealuminiuminc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="la page facebook" />
        </a>
        <a
          href="mailto:info@alpinealuminiuminc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/jb-concept-inc-v%C3%AAtements-et-objets-promotionnels-3973a4291/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer
