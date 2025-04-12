import styles from './Garantie.module.css'
import elegant from '../../assets/images/Élégant 2.jpg'
import moderne from '../../assets/images/Moderne 5.jpg'
import rustique from '../../assets/images/Rustique 3.jpg'
import { useMediaQuery } from 'react-responsive'

const Garantie = () => {

const isMobile = useMediaQuery({ query: '(max-width: 65em)' });


  return (
    <article className={styles['garantie']} >
      <h2 className={styles['garantie__title']}>Garantie à vie</h2>
      <p className={styles['garantie__text']}>  Grâce à notre procédé sans silicone qui nécessite aucun entretien, nos chapeaux de cheminée sont garantis à vie. Un investissement durable pour votre tranquillité d'esprit ! </p>
      <div className={styles['garantie__img--wrapper']}>
        <img className={styles['garantie__img']} src={elegant} alt="notre modèle élégant" />
        <img style={{display: isMobile ? 'none' : 'block'}} className={styles['garantie__img']} src={moderne} alt="notre modèle moderne" />
        <img style={{display: isMobile ? 'none' : 'block', objectFit: 'cover'}} className={styles['garantie__img']} src={rustique} alt="notre modèle rustique" />
      </div>
    </article>
  )
}

export default Garantie
