import React, { useEffect, useState } from 'react'

import service from '../appwrite/confi';
import { Container, Postcard} from '../components';
import { useSelector as useselector } from 'react-redux';



function Home() {
    const [posts , setpost] = useState([]);
    const select = useselector((state) => state.auth.userdata)  


   

 


    // useEffect(()=> {
    //    service.getposts().then((posts) => {
        
    //     
    //         setpost(posts.rows);
    //     
    //    }

    //    )
    // }, [])

    useEffect(() => {
        
    service.getposts().then((result) => {
        console.log("Appwrite response:", result);
        console.log("Post rows:", result?.rows);

        if(result){

        setpost(result?.rows ?? []);

        }

        // if(result){
        //     setpost(post.document)
        // }
    });
}, []);

   if(posts.length === 0) return (
        <div className="w-full py-8 mt-4 text-center">
          <Container>
<div className="flex flex-wrap">
    <div className="p-2 w-full">
        <h1 className="text-2xl font-bold hover:text-gray-500">
    add any post 
    </h1>
    </div>
</div>

            </Container>  
        </div>
    )



     console.log("post id is ", posts.userid)
        console.log("user id is ", select.$id)

    // if(post.userid === select.$id){
    //     console.log("post id is ", post.$id)
    //     console.log("user id is ", select.userId)
     return (
            <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>

            
            {posts
  .filter((post) => post.userid === select.$id)
  .map((post) => (
    <div key={post.$id} className='p-2 w-1/4'>
      <Postcard {...post} />
    </div>
  ))}
        </div>
    </Container>
</div>
        )


   


  
//      if(post.length === 0) return (
//         <div className="w-full py-8 mt-4 text-center">
//           <Container>
// <div className="flex flex-wrap">
//     <div className="p-2 w-full">
//         <h1 className="text-2xl font-bold hover:text-gray-500">
//     add any post 
//     </h1>
//     </div>
// </div>

//             </Container>  
//         </div>
//     )
//     return  (

// <div className='w-full py-8'>
//     <Container>
//         <div className='flex flex-wrap'>

            
//             {post.map((post)=> (
//                 <div key={post.$id} className='p-2 w-1/4'>
//                     <Postcard {...post}/>                                                                                                                     
//                 </div>
//             ))}
//         </div>
//     </Container>
// </div>
//     )
}

export default Home


