
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
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UserAccount from "./Pages/UserAccount"
import ReviewInput from './shared/ReviewInput'
import Payment from './Pages/Payment'
import UserReviews from './Pages/UserReviews'

function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/login', '/register','/userreview', '/booking', '/admin', '/panel','/users','/details','/order','/payment'];

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
        {/* <Route path='/dashboard' element={<Admin/>}/> */}
        <Route path='/thankyou' element={<ThankYou />} />
        <Route path='/tour' element={<TourPage />} />
        <Route path='/users' element={<Users/>} />
       <Route path='/order' element={<Bookings/>}/>
        <Route path='/details' element={<TourData/>}/>
    <Route path='/account' element={<UserAccount/>}/>
    <Route path='/review' element={<ReviewInput/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route  path='/userreview' element={<UserReviews/>}/>
      </Routes>
    
      {!shouldHideHeaderFooter && <Footer />}
      <ToastContainer/>
    </>
  
 );
}

export default App