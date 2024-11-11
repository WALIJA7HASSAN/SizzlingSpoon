import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Menu from './Components/Menu/Menu'
import Shop from './Components/Shop/Shop'


const App = () => {
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App