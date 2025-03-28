import styles from './Home.module.css'
import banner from '../../assets/images/banner.jpg'
import aluminium from '../../assets/images/aluminium.jpg'
import jean from '../../assets/images/DSC09613-7.jpg'
import { useMediaQuery } from 'react-responsive'
import banner_mobile from '../../assets/images/banner-mobile.jpg'

const Home = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 65em)' });

  return (
   <section className={styles['home']}>
      <div className={styles['home__banner']}> 
        <img className={styles['home__banner-img']} src={isMobile ? banner_mobile : banner} alt="banner" />
        <h1 className={styles['home__banner__title']}><span>Alpine</span> Aluminium</h1>
        <h2 className={styles['home__banner__subtitle']}>Référence en chapeaux de cheminée</h2>
        <div className={styles['home__banner__border']}><h2>450-668-6657</h2></div>
      </div>
        <div className={styles['home__banner__border--mobile']}><h2>450-668-6657</h2></div> 
      <article className={styles['home__aluminium']}>
        <h2 className={styles['home__aluminium__title'] }>Les Experts de l'aluminium</h2>
        <p className={styles['home__aluminium__text']}>Spécialistes en chapeaux de cheminée, nous possédons tout l'équipement nécessaire pour travailler l'aluminium sous toutes ses moutures. Si c'est en aluminium, on s'en occupe. </p>
        <div className={styles['home__aluminium--wrapper']}>
          
          <div className={styles['home__aluminium__part']}>
            <img className={styles['home__aluminium__part__img']} src={aluminium} alt="une photo de l'équipe en action " />
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
