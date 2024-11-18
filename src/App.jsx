import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import { BrowserRouter, createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {

 let x = createHashRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'Portfolio',element:<Portfolio/>},
    {path:'Contact',element:<Contact/>},
    {path:'*',element:<Notfound/>},
    {path:'About',element:<About/>},
     
    ]},
  ])

  return <RouterProvider router={x}></RouterProvider>

  

  
   


}

export default App
