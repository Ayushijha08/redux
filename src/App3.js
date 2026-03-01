import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import Info from './pages/Info'

const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const Info = lazy(() => import('./pages/Info'))


const App3 = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/info' element={<Info />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App3