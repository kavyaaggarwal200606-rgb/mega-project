import React, { useEffect, useState } from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import service from '../appwrite/confi'
import { Container , Postform } from '../components'

function Editpost() {
    const [post , setpost] = useState()
    const {slug} = useParams()
    const naviagte = useNavigate()
    useEffect(() => {
          if(slug){
        service.getpost(slug).then((postt) => {
            if(postt){
                setpost(postt)
            }else{
                naviagte('/')
            }
        })
    }

    }, [slug , naviagte])
  
  return post ?  (
    <div className='py-8'>
    <Container>
        <Postform post={post}/>  
         </Container>
         </div>
  ) : null
}

export default Editpost