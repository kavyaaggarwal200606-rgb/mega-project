import React, { useState } from 'react'

import authentication from '../../appwrite/auth';
import { logout } from '../../store/slice';
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';


function Logout() {

    const [check , usecheck] = useState(false)
const dispatch = useDispatch()
const navigate = useNavigate()
    const handling = ({}) => {
authentication.logout()
.then(()=> {
    dispatch(logout())
})
    } 
  return (
    <div>
   <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={() => navigate("/show") }>logout</button>

   {check && 
    <div className="h-[400px] w-[400px] bg-slate-800 flex justify-center items-center gap-[15px] text-white"
>
    <p> what to logout your acc </p>
    <button onClick={handling}  className='inline-bock px-6 py-2  bg-amber-500 duration-200 hover:bg-blue-100 rounded-full' >Logout</button>
     <button onClick={() => usecheck(!check)}  className='inline-bock px-6 py-2  bg-amber-500 duration-200 hover:bg-blue-100 rounded-full' >cancel</button>
   </div>}

   </div>

)

}

export default Logout