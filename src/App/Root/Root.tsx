import { Outlet } from "react-router"
import Navbar from "./Navbar/Navbar"


const Root = () => {
  return (
    <>
    <header>
      <Navbar/>
      
    </header>
    <main>
      <Outlet/>
      
    </main>
    </>
  )
}

export default Root
