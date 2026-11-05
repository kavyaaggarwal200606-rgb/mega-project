import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/slice'
import { useSelector } from 'react-redux'



function Cherker({ children, authentication = true}) {

    const [loader , setloader] = useState(true)
    const naigater = useNavigate()

    const status = useSelector(state => state.auth.status);





    useEffect(()=> {

        if(authentication && status !== authentication){
            naigater("/login")
        }else if(!authentication && status !== authentication){
            naigater("/")
        }


        setloader(false)

    },[ authentication , status])


  return loader ? <h1>....loding </h1> : <>{children}</>
}

export default Cherker