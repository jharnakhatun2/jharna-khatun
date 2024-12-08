import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Layout from './components/Navigation/Layout'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
