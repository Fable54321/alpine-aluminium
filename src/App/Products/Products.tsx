import styles from './Products.module.css'
import { chapeaux } from '../../assets/Content/chapeaux'
import ProductsHeader from './ProductsHeader/ProductsHeader'

const Products = () => {

  interface chapeaux {
    id: number,
    model: string,
    src: string,
    description: string
  }

  return (
    <>
    <section className={styles["products"]}>
      <ProductsHeader />
      <div className={styles["products--wrapper--wrapper"]}>
      <div className={styles["products__background"]}>
        
        <div className={styles["products--wrapper"]}>
          {chapeaux.map((chapeau: chapeaux) => (
              <div key={chapeau.id} className={styles["products__card"] + ' ' + styles[`products__card--${chapeau.id}`] }>
                <img className={styles["products__card__img"] + ' ' + styles[`products__card__img--${chapeau.id}`]} src={chapeau.src} alt={chapeau.model} />
                <div className={styles["products__card__details"]}>
                    <p className={styles["products__card__details__title"]}>{chapeau.model}</p>
                    <p className={styles["products__card__details__description"]}>{chapeau.description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
      </div>
    </section>
    
    </>
  );
}

export default Products
