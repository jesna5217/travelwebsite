import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonApi"

//register Api
export const registerApi=async(userDetails)=>{
    return await commonApi('POST',`${BASE_URL}/user/register`,userDetails,"")
}

//login Api
export const loginApi=async(userDetails)=>{
    return await commonApi('POST',`${BASE_URL}/user/login`,userDetails,"")
}

//add tour details

export const addTourApi=async(tourDetails,reqHeader)=>{
    return await commonApi("POST",`${BASE_URL}/tour/addtour`,tourDetails,reqHeader)
}


//get all tours
export const getAllTour=async()=>{
    return await commonApi("GET",`${BASE_URL}/tour/gettour`,"","")
}

//get tours by sl no

export const getAllTourById=async(tourId)=>{
    return await commonApi("GET",`${BASE_URL}/tour/gettourid/${tourId}`,"","")
}

//to update tours

export const  editTourApi=async(tourId,reqBody,reqHeader)=>{
    return await commonApi("PUT",`${BASE_URL}/tour/edittour/${tourId}`,reqBody,reqHeader)
}
//delete tours
export const deleteTourApi=async(tourId,reqHeader)=>{
    return await commonApi("DELETE",`${BASE_URL}/tour/deletetour/${tourId}`,{},reqHeader)
}

//get user details
export const getAllUsersApi=async()=>{
    return await commonApi("GET",`${BASE_URL}/getuser`,"","")
}

//delete user

export const deleteUserApi=async(userId,reqHeader)=>{
    return await commonApi("DELETE",`${BASE_URL}/user/deleteuser/${userId}`,{},reqHeader)
}

//get admin details
export const adminLoginApi=async(userDetails)=>{
    return await commonApi("POST",`${BASE_URL}/admin/login`,userDetails,"")
}

//upload booking details
export const bookingDataApi=async(bookingData,reqHeader)=>{
    return await commonApi("POST",`${BASE_URL}/booking`,JSON.stringify(bookingData),reqHeader)
}

//get booking details per user
export const getBookingApi=async(userId)=>{
    return await commonApi("GET",`${BASE_URL}/bookingdetails/${userId}`,"","")
}

//get all bookings
export const getAllBookingsApi=async()=>{
    return await commonApi("GET",`${BASE_URL}/allbookings`,"","")
}

//add reviews

export const addReviewsApi=async(reqBody,reqHeader)=>{
    return await commonApi("POST",`${BASE_URL}/review`,reqBody,reqHeader)
}

//get reviews by id
export const getReviewApi=async(tourId)=>{
    return await commonApi("GET",`${BASE_URL}/getreview/${tourId}`,"","")
}



export const getUserByIdApi=async(userId)=>{
    return await commonApi("GET",`${BASE_URL}/user/details/${userId}`,"","")
}

//to get reviews
export const getAllReviewApi=async()=>{
    return await commonApi("GET",`${BASE_URL}/allreview`,"","")
}
// //update profile
export const updateProfileApi=async(userId,reqBody,reqHeader)=>{
    return await commonApi("PUT",`${BASE_URL}/uploadimage/${userId}`,reqBody,reqHeader)
}


//get admin details
export const getAdminApi=async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/getadmin`,"",reqHeader)
}

export const updateAdminApi=async(id,reqBody,reqHeader)=>{
    return await commonApi("PUT",`${BASE_URL}/updateadmin/${id}`,reqBody,reqHeader)
}


//get tour details by search

export const getSearchTourApi=async(searchDetails)=>{
    return await commonApi("GET",`${BASE_URL}/tour/searchtour?location=${encodeURIComponent(searchDetails.location)}&fromDate=${encodeURIComponent(searchDetails.fromDate)}&toDate=${encodeURIComponent(searchDetails.toDate)}&people=${encodeURIComponent(searchDetails.people)}`,"","")
}

