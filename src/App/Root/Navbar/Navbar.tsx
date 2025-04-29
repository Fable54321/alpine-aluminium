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
    setKillSwitch(true);

    switch (location.pathname) {
      case '/':
        setUsablePath('Accueil');
        break;
      case '/contact':
        setUsablePath('Contactez Nous');
        break;
      case '/produits':
        setUsablePath('Nos Produits');  
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
      <Link to= "/" aria-label='go home'>
      <img
        className={styles["navbar__top__logo"]}
        src={logo}
        alt="le logo de la compagnie"
      />
      </Link>
      <nav className={styles["navbar__nav-desktop"]}>
      <ul className={styles["navbar__nav-desktop__list"]}>
  <Link className={styles["navbar__nav-desktop__list__link"]} to="/">
    <li>Accueil</li>
  </Link>
  <Link className={styles["navbar__nav-desktop__list__link"]} to="/produits">
    <li>Nos Produits</li>
  </Link>
  {/* <Link className={styles["navbar__nav-desktop__list__link"]} to="/produits">
    <li>Notre équipe</li>
  </Link> */}
  <Link
    className={styles["navbar__nav-desktop__list__link"]}
    to="/contact"
  >
    <li>Contact</li>
  </Link>
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
      <Link className={styles["navbar__nav-menu__list__link"]} to="/">
        <li>Accueil</li>
      </Link>
      <Link className={styles["navbar__nav-menu__list__link"]} to="/produits">
        <li>Nos Produits</li>
      </Link>
      {/* <Link className={styles["navbar__nav-menu__list__link"]} to="">
        <li>Notre équipe</li>
      </Link> */}
      <Link
        className={styles["navbar__nav-menu__list__link"]}
        to="/contact"
      >
        <li>Contact</li>
      </Link>
    </ul>
  </nav>
</div>
<div className={styles["navbar__bottom"]}>
  
  <h2 className={styles["navbar__bottom__title"]}>{usablePath}</h2>{" "}
  {/*get location*/}
</div>
<div className={styles["navbar__border"]}></div>
  </section>
);
}

export default Navbar
