import Courses from "./components/courses/Courses"
import Home from "./components/home/Home"
import {Navigate, Route, Routes} from 'react-router-dom'
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/course' element={ authUser ? <Courses/> : <Navigate to="/signup" />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        {/* to show nice alert message */}
        <Toaster />
      </div>
    </>
  )
}

export default App
