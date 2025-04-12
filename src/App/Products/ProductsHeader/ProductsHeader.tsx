import styles from './ProductsHeader.module.css'
import garantie from '../../../assets/Garantie.pdf'

const ProductsHeader = () => {
  return (
    <article className={styles['products__header']}>
      <h2 className={styles['products__header__title']}>Nos Chapeaux de cheminée</h2>
      <p className={styles['products__header__description']}>Une gamme complète pour tous les besoins et tous les budgets<br/><br/>

Chez Alpine Aluminium, nous proposons une vaste sélection de chapeaux de cheminée, conçus pour répondre à une variété de besoins techniques, esthétiques et budgétaires.<br/><br/> Notre gamme s’étend :

Des modèles standards et économiques, parfaits pour ceux qui cherchent une solution fiable, fonctionnelle à bon prix.

Aux chapeaux de cheminée haut de gamme, qui offrent une finition ultra soignée qui ajoute du cachet à votre toiture.<br/><br/>

Chaque produit est conçu pour assurer une protection efficace contre la pluie et la neige tout en favorisant une bonne évacuation des fumées.

Tous nos produits sont <a href='#' download={garantie}>garantis à vie</a>
</p>
    </article>
  )
}

export default ProductsHeader
