import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';

function Header() {
  const location=useLocation()
  const [showHeader, setShowHeader] = useState(false);
  const[isLogin,setIsLogin]=useState(false);
  const [username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true);
      const details=JSON.parse(sessionStorage.getItem("loggedUser"));
      if(details){
        setUsername(details.username)
      }
    }
  },[])
 
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        // Show the header only when scrolling on the homepage
        if (window.scrollY > 100) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
    };
   
    // Always show the header by default on other pages
    if (location.pathname !== '/') {
      setShowHeader(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleLogout = () => {
    sessionStorage.removeItem("token"); 
    sessionStorage.removeItem("loggedUser")
    setIsLogin(false);
    setUsername("")
  };


  return (
<>


 { showHeader && (

<header class="fixed top-0 left-0 z-50 h-[60px] w-full bg-white shadow-[10px_2px_10px_grey] d-flex justify-between items-center p-4">
<Link to={'/'}>
   <div className='logos font-bold text-xl' style={{ fontFamily: "M PLUS Rounded 1c, sans-serif"}}>day<span style={{color:'rgb(220, 190, 30)'}}>Out.</span></div>
 </Link>  
  
    <nav className='nav_bar'>
        <ul>
      <Link to={'/'}><li className='textColor'>Home</li></Link>
           <a href="#about"><li>About</li></a>
           <Link to={'/tour'}><li>Tours</li></Link>
          <a href="#review"><li>Reviews</li></a>
          <Link to={'/blog'}><li>Blogs</li></Link>
        </ul>
    </nav>
{/* --------------------------------------- */}

<Menu menuButton={<button className='menu_bar'><i class="fa-solid fa-bars"></i></button>} transition>
      <MenuItem><Link to={'/'}><li className='textColor'>Home</li></Link></MenuItem>
   
      <MenuItem><Link to={'/tour'}><li>Tours</li></Link></MenuItem>

  <MenuItem><Link to={'/blog'}><li>Blogs</li></Link></MenuItem>
    </Menu>

{/* --------------------------------------- */}


<div className='user-name'>
            {isLogin && username && <p style={{ color: "black" ,fontWeight:"600"}}>Welcome <span className='textColor fs-5 fw-bold'> {username}</span></p>}
          </div>



    <div className='d-flex login'>
      {
        isLogin?<> <Link to={'/login'}> <div style={{backgroundColor:'rgb(220, 190, 30)'}} className='log_out me-3' onClick={handleLogout}  >
        <button >Log out</button>
             </div></Link>
 <Link to={'/account'}> <button className='mt-2'><i class="fa-regular fa-user"></i></button></Link>
             </>:
           <Link to={'/login'}> <div style={{backgroundColor:'rgb(220, 190, 30)'}} className='log_out me-3'  >
           <button >Log in</button>
                </div></Link>  
      }
    
    </div>
    </header>
    
  )}


</>
  )
}

export default Header