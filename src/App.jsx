import { useState } from 'react'
import Nav from './components/nav.jsx'
import Headpage from './components/headpage.jsx'
import Bludostdashtani from './components/bludostdashtani.jsx'
import Ragbandicart from './components/ragbandicart.jsx'
import Bluline from './components/bluline.jsx'
import Hoviat from './components/hoviat.jsx'
import Enteghalhoshmad from './components/enteghalhoshmad.jsx'
import Soalat from './components/soalat.jsx'
import Socialmedia from './components/socialmedia.jsx'
import Footer from './components/footer.jsx'

function App() {


  return (
    <main className='overflow-hidden'>
      <Nav/>
      <Headpage/>
      <Bludostdashtani/>
      <Ragbandicart/>
      <Bluline/>
      <Hoviat/>
      <Enteghalhoshmad/>
      <Soalat/>
      <Socialmedia/>
      <Footer/>
    </main>
  )
}

export default App
