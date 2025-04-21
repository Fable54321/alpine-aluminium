import { Outlet } from "react-router"
import Navbar from "./Navbar/Navbar"
import styles from './Root.module.css'
import Footer from "../../Components/Footer/Footer"


const Root = () => {
  return (
    <>
    <header>
      <Navbar/>
      
    </header>
    <main className={styles['main']}>
      <Outlet/>
      
    </main>
    <Footer />
    </>
  )
}

export default Root
