import React from 'react'
import { useNavigate } from 'react-router-dom'
import authentication from '../appwrite/auth'
import {useDispatch} from "react-redux"


function Showing() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cancel = () => {

        authentication.logout()
        .then(() => {
            dispatch(logout())
        })
        navigate("/login")

    }


  return (
    <div class="bg-blue-950 min-h-screen flex items-center justify-center">

  <div class="flex gap-6">
    <button onClick={cancel} class="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
      logout 
    </button>

    <button onClick={() => navigate('/')} class="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
      cancel
    </button>
  </div>

</div>
  )
}

export default Showing