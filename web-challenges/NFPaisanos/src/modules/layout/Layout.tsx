import Header from './header/Header';
import Footer from './footer/Footer';
import type { ReactElement } from 'react'

export default function Layout({ children }:{children: ReactElement}){

  return (
    <>
      <Header />
        <main className="py-10"  style={{overflow: 'visible'}}>
          { children }
        </main>
      <Footer/>
    </>
)
}