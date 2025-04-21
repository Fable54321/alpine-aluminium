// import React, { useEffect, useState } from 'react';
import styles from './Success.module.css'

export interface SuccessProps {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface setNameprops {
  setNom: React.Dispatch<React.SetStateAction<string>>;
}

export interface nameProps {
  nom: string
}


const Success: React.FC<SuccessProps & nameProps & setNameprops> = ({ setSuccess }) => {

 

 

  const handleClick = () => {
    
    setSuccess(false);
    
    window.location.reload();

  }

  return (
    <section className={styles['success']}>
     <div className={styles['success--wrapper']}>
      <div className={styles['success--wrapper--inner']}>
        <h2 className={styles['success__title']}>Le courriel a été envoyé avec succès
        
      </h2>
      <div className={styles['success__text--wrapper']}>
        <p className={styles['success__text']} >Nous vous recontacterons </p>
        <p className={styles['success__text']} >dans les plus brefs délais</p>
      </div>
        <button onClick={handleClick} className={styles['success__button']}>Fermer</button>
      </div>

      
      
      </div> 
    </section>
  )
}

export default Success
