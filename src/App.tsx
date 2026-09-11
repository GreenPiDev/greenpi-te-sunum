import { useState } from 'react'
import { Nav } from './components/layout/Nav'
import { Cursor } from './components/layout/Cursor'
import { PageLoader } from './components/layout/PageLoader'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Gallery } from './components/sections/Gallery'
import { Partners } from './components/sections/Partners'
import { Process } from './components/sections/Process'
import { Opportunities } from './components/sections/Opportunities'
import { Exhibitions } from './components/sections/Exhibitions'
import { Contact } from './components/sections/Contact'
import { useSmoothScroll } from './lib/hooks/useSmoothScroll'

function App() {
  const [loading, setLoading] = useState(true)
  useSmoothScroll()

  return (
    <>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Partners />
        <Process />
        <Opportunities />
        <Exhibitions />
        <Contact />
      </main>
    </>
  )
}

export default App
