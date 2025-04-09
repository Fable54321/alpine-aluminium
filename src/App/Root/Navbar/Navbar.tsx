import styles from './Navbar.module.css'
import logo from '../../../assets/images/alpine_logo.png'
import dropdown from '../../../assets/images/dropdown.png'
import close from '../../../assets/images/close.png'
import { useLocation } from 'react-router'
import { useMediaQuery } from 'react-responsive'
import { MouseEventHandler, useEffect, useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 65em)' });
  const [navMenu, setNavMenu] = useState(false);
  const [killSwitch, setKillSwitch] = useState(true);
  const [buttonDisplay, setButtonDisplay] = useState('block')

  const location = useLocation();
  const [usablePath, setUsablePath] = useState('');

  useEffect(() => {

    setNavMenu(false);

    switch (location.pathname) {
      case '/':
        setUsablePath('Accueil');
        break;
      case '/contact':
        setUsablePath('Contactez Nous');
        break;
      default:
        setUsablePath('');
        break;
    }
  }, [location]);

  useEffect(()=> {
    if(!isMobile){
      setNavMenu(true)
    }
  },[isMobile])
  
const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
if(!navMenu){
  setKillSwitch(false);
  setTimeout(()=>{
    setNavMenu(true);
  }, 200)
}
  
    setButtonDisplay('none');
    setTimeout(()=> {
      setButtonDisplay('block')
    }, 25)

    if(navMenu){
      setNavMenu(false)
       setTimeout(() => {
         setKillSwitch(true)
       }, 1000)
    }
};

return (
  <section className={styles.navbar}>
    <div className={styles["navbar__top"]}>
      <img
        className={styles["navbar__top__logo"]}
        src={logo}
        alt="le logo de la compagnie"
      />
      <nav className={styles["navbar__nav-desktop"]}>
      <ul className={styles["navbar__nav-desktop__list"]}>
          <li>
            <Link className={styles["navbar__nav-desktop__list__link"]} to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className={styles["navbar__nav-desktop__list__link"]} to="">
              Nos Produits
            </Link>
          </li>
          <li>
            <Link className={styles["navbar__nav-desktop__list__link"]} to="">
              Notre équipe
            </Link>
          </li>
          <li>
            <Link className={styles["navbar__nav-desktop__list__link"]} to="">
              Estimation Rapide
            </Link>
          </li>
          <li>
            <Link
              className={styles["navbar__nav-desktop__list__link"]}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        style={{ display: !isMobile ? "none" : "block" }}
        onClick={handleClick}
        className={styles["navbar__top__dropdown"]}
      >
        <img src={dropdown} aria-label="menu" />
      </button>
    </div>

    <div style={{ display: killSwitch ? "none" : "block" }}>
      <nav
        className={
          navMenu ? styles["navbar__nav-menu"] : styles["navbar__nav-menu--off"]
        }
      >
        <button
          style={{ display: buttonDisplay }}
          className={styles["navbar__nav-menu__close"]}
          onClick={handleClick}
        >
          <img src={close} aria-label="close" />
        </button>
        <ul className={styles["navbar__nav-menu__list"]}>
          <li>
            <Link className={styles["navbar__nav-menu__list__link"]} to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className={styles["navbar__nav-menu__list__link"]} to="">
              Nos Produits
            </Link>
          </li>
          <li>
            <Link className={styles["navbar__nav-menu__list__link"]} to="">
              Notre équipe
            </Link>
          </li>
          <li>
            <Link className={styles["navbar__nav-menu__list__link"]} to="">
              Estimation Rapide
            </Link>
          </li>
          <li>
            <Link
              className={styles["navbar__nav-menu__list__link"]}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className={styles["navbar__bottom"]}>
      <p className={styles["navbar__bottom__number"]}>450-668-6657</p>
      <h2 className={styles["navbar__bottom__title"]}>{usablePath}</h2>{" "}
      {/*get location*/}
    </div>
    <div className={styles["navbar__border"]}></div>
  </section>
);
}

export default Navbar
