import {useDispatch} from "react-redux"
import {useEffect} from "react"


import { useState } from 'react'

import { login, logout } from "./store/slice";
 import authentication from "./appwrite/auth"
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router-dom"

function App() {
  
const [lodind , setloding] = useState(true);

const dispatch = useDispatch()

useEffect(()=> {
authentication.checkuser()
.then((userData)=> {
  if(userData){
   dispatch(login({userData}))
  }else{
    dispatch(logout())
  }
})
.finally(()=> setloding(false))

}, [])


  return !lodind ?  (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
  <Header/>
<Outlet/>
  <Footer/>
  </div>
  </div>
      
  ) : null
} 

export default App
