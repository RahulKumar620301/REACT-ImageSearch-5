import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Image from './Image.jsx'
import Videos from './Videos.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'/',element:<Image/>},
      {path:'/videos',element:<Videos/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
