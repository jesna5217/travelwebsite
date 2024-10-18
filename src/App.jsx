
import './App.css'
import Header from './Components/Header'
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Auth from './Pages/Auth'
import AdminPanel from './Pages/AdminPanel'
import BookingPage from './Pages/BookingPage'
import Blog from './Pages/Blog'
import LoginAdmin from './Pages/LoginAdmin'
import TourPage from './Components/TourPage'
import ThankYou from './Pages/ThankYou'
import Users from './shared/Users'
import Bookings from './shared/Bookings'
import TourData from './Pages/TourData'

function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/login', '/register', '/booking', '/admin', '/panel','/users','/details','/order'];

  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register={'register'} />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/admin' element={<LoginAdmin />} />
        <Route path='/booking/:id' element={<BookingPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/panel' element={<AdminPanel />} />
        <Route path='/thankyou' element={<ThankYou />} />
        <Route path='/tour' element={<TourPage />} />
        <Route path='/users' element={<Users/>} />
       <Route path='/order' element={<Bookings/>}/>
        <Route path='/details' element={<TourData/>}/>
    
      </Routes>
    
      {!shouldHideHeaderFooter && <Footer />}
    </>
  
 );
}

export default App