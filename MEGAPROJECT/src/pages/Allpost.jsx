import React, { useEffect, useState } from 'react'
import service from '../appwrite/confi'
import { Container ,Postcard } from '../components'
import { useSelector } from 'react-redux'

function Allpost() {

const [post , addpost] = useState([])
const userdata = useSelector((state)=> (state.auth.userdata))   

useEffect(()=> {  service.getposts().then((post) => {
        if(post){
addpost(post.rows)


        }
   

        

})}, [])
  



  return (
    
    <div  className='w-full py-8'>
<Container>
    <div className='flex flex-wrap'>
        {post.filter(post => post.userid === userdata.$id)
        .map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <Postcard {...post} />
            </div>
          ))}
        {/* {post.map((pot) => (
            <div  className='flex flex-wrap' key={pot.$id}>
<Postcard {...pot}/>
            </div>
        ))} */}
    </div>
</Container>
    </div>
  )
}

export default Allpost