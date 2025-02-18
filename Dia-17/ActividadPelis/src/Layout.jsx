import '@/css/Layout.css'
import { Outlet, NavLink } from 'react-router'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function Layout() {
  

  return (
    <>
  <header>
    <Header/>
  </header>

  <Outlet/>

  <footer>
    <Footer/>
  </footer>
    </>
  )
}

export default Layout
