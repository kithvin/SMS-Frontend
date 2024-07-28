import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './layout/Footer'
import './App.css'
import Navbar from './layout/Navbar'
import Home from './page/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddTeacher from './teacher/AddTeacher'

function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/addteacher" element={<AddTeacher/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
