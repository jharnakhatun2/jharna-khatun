import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './router/Layout/Layout.jsx'
import Error from './pages/Error/Error.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import Contact from './pages/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error/>,
    children:[
      {path:'', element:<Home/>},
      {path:'about', element:<About/>},
      {path:'projects', element:<Projects/>},
      {path:'blogs', element:<Blogs/>},
      {path:'contact', element:<Contact/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
