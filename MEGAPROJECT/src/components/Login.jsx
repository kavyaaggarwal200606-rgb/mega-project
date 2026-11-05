import { useState } from "react"
import {useNavigate , Link} from "react-router-dom"

import Button from "./commonbut"
import Input from "./input"
import Logo from "./logo"

import {useForm} from "react-hook-form"



import { login as authlogin} from "../store/slice"
import { useDispatch } from "react-redux"
import authentication from "../appwrite/auth"












function Login() {

    const [error , seterror] = useState("")

    const dispatch = useDispatch()
    const navigater = useNavigate()

    const {register , handleSubmit} = useForm()



    const login = async(data) => {
        seterror("")
        try {

           const  session = await authentication.login(data)

           if(session){
            const getid = await authentication.checkuser() 
            if(getid) dispatch(authlogin({userData : getid}));
            navigater("/")
           }

           
     
        } catch (error) {
            seterror(error.message)
        }

    }

  return (
    
   
   <div
     className='flex items-center justify-center w-full'
   >
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">

          <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>

            
        </div>

        <div>
           <h2>signup your acc </h2>

            <p className="mt-2 text-center text-base text-black/60">

           <Link to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
           >
           singn up
           </Link>

           </p>

           {error && <p  className="text-red-600 mt-8 text-center">{error}</p>}

           <form onSubmit={handleSubmit(login)}>
            <Input className='mt-8'
             label="gamil"
            placeholder = "gmail"
            type = "email"
            {...register("email", {
                required : true,
                  validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
            })}

            






             />

               <Input
             label="password"
            placeholder = "Enter Your Password"
            type = "password"
            {...register("password", {
                required : true,
            })}


        

        
             />

             <Button children= "button"  type="submit"
                className="w-full"/>
           </form>





        </div>


        
    </div>
   </div>
  )
}

export default Login