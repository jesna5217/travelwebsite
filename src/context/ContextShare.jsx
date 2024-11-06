import React, { createContext, useState } from 'react'
export  const addTourResponseContext=createContext();
export const editTourResponseContext=createContext();
export const bookingResponseContext=createContext();
export const userResponseContext=createContext();
function ContextShare({children}) {
    //create a state that need to be shared
    const [addTourResponse,setAddTourResponse]=useState({});
    const [editTourResponse,setEditTourResponse]=useState({})
    const [bookingResponse,setBookingResponse]=useState([]);
    const [userResponse,setUserResponse]=useState({})
  return (
   <>
   <addTourResponseContext.Provider value={{addTourResponse,setAddTourResponse}}>
  <editTourResponseContext.Provider value={{editTourResponse,setEditTourResponse}}>
  <bookingResponseContext.Provider value={{bookingResponse,setBookingResponse}}>
  <userResponseContext.Provider value={{userResponse,setUserResponse}}>
  {children}
  </userResponseContext.Provider>
  </bookingResponseContext.Provider>
  </editTourResponseContext.Provider>
   </addTourResponseContext.Provider>
   
   </>
  )
}

export default ContextShare