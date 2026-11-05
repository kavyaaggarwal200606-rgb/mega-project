import React, { useState } from 'react'
import { useNavigate , Link, data } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { login } from '../store/slice'
import { useDispatch } from 'react-redux'
import authentication from '../appwrite/auth'
import Button from './commonbut'
import Input from './input'
import Logo from './logo'


function Signup(){

    const dispatch = useDispatch()
    const navigater = useNavigate()
    const [error , seterror ] = useState()
    const {register ,handleSubmit} = useForm()



     const Create = async(data) => {
        seterror('')
        try {
            const creat = await authentication.createaccount(data)

            if(creat){
                const check = await  authentication.checkuser()
                if(check) dispatch(login({userData : check}))
                    navigater("/")

            }

            
        } catch (error) {
           seterror(error.message) 
        }
    }

  return (
    <div  className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

            <p  className="mt-2 text-center text-base text-black/60">
                <span  className="inline-block w-full max-w-[100px]">
                    <Logo/>
                    </span></p> 
            <h1 className="text-center text-2xl font-bold leading-tight">signin your acc </h1>
            <span>

                <Link to="/login"
                 className="font-medium text-primary transition-all duration-200 hover:underline">
                sign in 
                 </Link>
            </span>


            <div>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


            
        <form 
        onSubmit={handleSubmit(Create)}
        >

             <div className='space-y-5'>

            <Input
            label = "name"
            placeholder = "enter you full name"
            type = "text"
            {...register("name", {
                required : true 
            })}

            />

                  <Input
            label = "email"
            placeholder = "enter you mail id"
            type = "text"
            {...register("email", {
                required : true 
            })}

            />

            
                  <Input
            label = "password"
            placeholder = "create your password "
            type = "password"
            {...register("password", {
                required : true 
            })}

            />

            <Button type='submit' className="w-full">create account</Button>
            </div>
        </form>
        </div>
        
        </div>
    </div>
  )
}

export default Signup