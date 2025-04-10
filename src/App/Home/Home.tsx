import styles from './Home.module.css'
import banner from '../../assets/images/banner.jpg'
import bannerLow from '../../assets/images/banner--low.jpg'
import aluminiumLow from '../../assets/images/aluminium-low.jpg'
import moderne from '../../assets/images/cap--moderne.png'
import rustique from '../../assets/images/cap--rustique.png'
import euro from '../../assets/images/cap--euro.png'
import aluminium from '../../assets/images/aluminium.jpg'
import jean from '../../assets/images/jean kry.jpg'
import { useMediaQuery } from 'react-responsive'
import banner_mobile from '../../assets/images/banner-mobile.jpg'
import { useState, useEffect } from 'react'

const Home = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 65em)' });


  const [isSlow, setIsSlow] = useState(false);

  interface NetworkInformation extends EventTarget {
    readonly effectiveType?: string;
    readonly downlink?: number;
    readonly saveData: boolean;
    addEventListener(type: string, listener: (this: NetworkInformation, ev: Event) => void): void;
    removeEventListener(type: string, listener: (this: NetworkInformation, ev: Event) => void): void;
  }
  
 

  useEffect(() => {
    const connection = navigator.connection as NetworkInformation | undefined;

    console.log(isSlow);

    if (connection && connection.downlink !== undefined && connection.downlink < 5) {
      setIsSlow(true);
    }
  }, [])

  return (
   <section className={styles['home']}>
      <div className={styles['home__banner']}> 
        <img className={styles['home__banner-img']} src={isSlow ? bannerLow :  isMobile ? banner_mobile : banner} alt="banner" />
        <h1 className={styles['home__banner__title']}><span>Alpine</span> Aluminium</h1>
        <h2 className={styles['home__banner__subtitle']}>Référence en chapeaux de cheminée</h2>
        <div className={styles['home__banner__border']}><h2>450-668-6657</h2></div>
      </div>
        <div className={styles['home__banner__border--mobile']}><h2>450-668-6657</h2></div>
      <article className={styles['home__infiltrations']}>
        <h2 className={styles['home__infiltrations__title']}>Dites adieu aux infiltrations d'eau</h2>
        <p className={styles['home__infiltrations__text']}>Nos produits de haute qualité sont entièrement conçus par notre équipe. Ils sont sans silicone et donc 100% soudés, prêts pour le climat d'ici. Avec alpine aluminium, les infiltrations d'eau sont choses du passé.</p>
        
       <div className={styles['home__infiltrations__img--wrapper']}>
        <img className={styles['home__infiltrations__img']} src={moderne} alt="le chapeau de cheminée moderne est ici présenté" />
        <img style={{display: isMobile ? 'none': 'block'}} className={styles['home__infiltrations__img']} src={rustique} alt="le chapeau de cheminée rustique est ici présenté" />
        <img style={{display: isMobile ? 'none': 'block'}} className={styles['home__infiltrations__img']} src={euro} alt="le chapeau de cheminée euro est ici présenté" />
      </div>  

      </article>   
      <article className={styles['home__aluminium']}>
        <h2 className={styles['home__aluminium__title'] }>Les Experts de l'aluminium</h2>
        <p className={styles['home__aluminium__text']}>Spécialistes en chapeaux de cheminée, nous possédons tout l'équipement nécessaire pour travailler l'aluminium sous toutes ses moutures. Si c'est en aluminium, on s'en occupe. </p>
        <div className={styles['home__aluminium--wrapper']}>
          
          <div className={styles['home__aluminium__part']}>
            <img className={styles['home__aluminium__part__img']} src={isSlow ? aluminiumLow : aluminium} alt="une photo de l'équipe en action " />
            <p  className={styles['home__aluminium__part__text']}>Notre Expert David En action</p>
          </div>
          <div className={styles['home__aluminium__part']}>
            <img className={styles['home__aluminium__part__img']} src={jean} alt="une photo de l'équipe en action " />
            <p className={styles['home__aluminium__part__text']}>Notre Expert Jean-Krystof En action</p>
          </div>
        </div>
      </article>
      
      
        
      
      
   </section>
  )
}

export default Home
