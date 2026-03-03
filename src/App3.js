import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import withAuthorization from './hocs/withAuthorization'
import SInfo from './pages/SInfo'
import SecretRoute from './pages/SecretRoute'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import Info from './pages/Info'

const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const Info = lazy(() => import('./pages/Info'))

const ProtectedAbout = withAuthorization(About)  // we have passed About component inside withAuthorization hoc


const App3 = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<ProtectedAbout />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/info' element={<Info />} />
                    <Route element={<SecretRoute />}>
                        <Route path='/secret-info' element={<SInfo />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App3



// ways to create a Protected Route:
//1. by creating higher order components(HOC)
// 2. by creating nested route and using Outlet