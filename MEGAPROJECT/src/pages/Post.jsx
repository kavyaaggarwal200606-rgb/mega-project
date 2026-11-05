import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import service from '../appwrite/confi'
import { useSelector } from 'react-redux'
import parse from "html-react-parser"

import { Container } from '../components'


function Post() {


    

//     const url = service.priview("6ad5fdef00324fb38192");

// console.log("Preview URL tan tan tan:", url);

    // const [imageUrl, setImageUrl] = useState("");

    const [deleteee , setdelete] = useState(false)

    const [posts , setpost ] = useState(null)
    const { slug } = useParams()
    const userdata = useSelector((state)=> (state.auth.userdata))

    const navigate = useNavigate()
    const isauth = posts && userdata ?  userdata.$id === posts.userid : false

    console.log("Post user:", posts?.userid);
console.log("Logged-in user:", userdata?.$id);
console.log("Is author:", isauth);

   

    useEffect(()=> {
        if(slug){
            service.getpost(slug).then((post)=> {
                if(post){
                    setpost(post)
                }else {
                    navigate("/")
                }
            })
        }
    }, [slug , navigate])

//     useEffect(() => {
//     let cancelled = false;

//     // async function loadImage() {
//     //     if (!posts?.featureimage) return;

//     //     try {
//     //         const url = service.priview(posts.featureimage);

//     //         if (!cancelled) {
//     //             setImageUrl(url.toString());
//     //             console.log(posts.featureimage, "IMAGE URL:" )
//     //         }
//     //     } catch (error) {
//     //         console.error("Image preview error:", error);
//     //     }
//     // }

//     // loadImage();

//     return () => {
//         cancelled = true;
//     };
// }, [posts]);

//     useEffect(() => {
//     if (posts?.featureimage) {
//         service.priview(posts.featureimage)
//             .then((url) => {
//                 setImageUrl(url.toString());
//             })
//             .catch((error) => {
//                 console.log("Preview error:", error);
//             });
//     }
// }, [posts]);

   
    //  const hello = () => {
    //     console.log(posts.featureimage)
    // console.log(posts)
    // console.log(userdata)
    // console.log("hahaha")
    //  }


     const deletee = () => {
        if(posts){
            service.deletepost(posts.$id).then((post)=> {
                if(post){
                        service.deletefile(posts.featureImage)
                         navigate("/")
                }
            })
        
        }
    
    }

//      if (!posts || posts.userid !== userdata?.$id) {
//         return null; 
//     }

//     if(posts){
//         if(posts.userid !== userdata.$id){
//             return (
// <div className="py-8">
//     <Container>
//            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2"></div>

       
//         {/* <img src={service.priview(posts.featureimage)} alt={posts.content}  className="rounded-xl"/> */}

       
//         <img
//     src={imageUrl}
//     alt={posts.title}
//     className="rounded-xl"
//     onLoad={() => console.log("IMAGE LOADED")}
//     onError={() => console.log("IMAGE FAILED TO LOAD", imageUrl)}

// />
//         {/* <button onClick={hello} className="rounded-xl bg-amber-200">hahhahah</button> */}



// <div>
//         </div>



// {isauth && (
//     <div className="flex gap-3 mb-4">
//         <button className="mr-3" onClick={() => setdelete(true)}  >
//             Delete post

//     {deleteee && 
//     <div  className="h-[400px] w-[400px] bg-slate-800 flex justify-center items-center gap-[15px] text-white"
// >
//     <p> what to logout your acc </p>
//     <button onClick={deletee}  className='inline-bock px-6 py-2  bg-amber-500 duration-200 hover:bg-blue-100 rounded-full' >delete </button>
//      <button onClick={() => setdelete(!deleteee)}  className='inline-bock px-6 py-2  bg-amber-500 duration-200 hover:bg-blue-100 rounded-full' >cancel</button>
//    </div>}
//         </button>


//         <button className="mr-3" onClick={() => navigate(`/edit/${posts.$id}`)}>
//             Edit post
//         </button>
//     </div>
// )}

//   <div className="w-full mb-6">
//                     <h1 className="text-2xl font-bold">{posts.title}</h1>
//                 </div>

//                 <div className="browser-css">
//                     {parse(posts.content)}
//     <div/>                </div>
//     </Container>


// </div> 

//   )
            
//         }
//     }else{
//         return null;
//     }
// // 
    return posts ?  (


    <div className="py-8 bg-white">
    <Container>
           <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2"></div>

       
        {/* <img src={service.priview(posts.featureimage)} alt={posts.content}  className="rounded-xl"/> */}

       
        <img
    src={service.priview(posts.featureimage)}
    alt={posts.title}
    className="rounded-xl"
    onLoad={() => console.log("IMAGE LOADED")}
    // onError={() => console.log("IMAGE FAILED TO LOAD", imageUrl)}

/>
        {/* <button onClick={hello} className="rounded-xl bg-amber-200">hahhahah</button> */}



<div>
        </div>



{isauth && (
    <div className="flex gap-3 mb-4">
        <button className="mr-3" onClick={() => setdelete(true)}  >
            Delete post

    {deleteee && 
    <div  className="h-[400px] w-[400px] bg-slate-800 flex justify-center items-center gap-[15px] text-white"
>
    <p> what to logout your acc </p>
    <button onClick={deletee}  className='inline-bock px-6 py-2  bg-amber-500 duration-200 hover:bg-blue-100 rounded-full' >delete </button>
     <button onClick={() => setdelete(!deleteee)}  className='inline-bock px-6 py-2  bg-amber-500 duration-200 hover:bg-blue-100 rounded-full' >cancel</button>
   </div>}
        </button>


        <button className="mr-3" onClick={() => navigate(`/edit/${posts.$id}`)}>
            Edit post
        </button>
    </div>
)}

  <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{posts.title}</h1>
                </div>

                <div className="browser-css">
                    {parse(posts.content)}
    <div/>                </div>
    </Container>


</div> 

  ) : null;
    } 
  
// } : null;

export default Post


/* {isauth && (
    <div  className="absolute right-6 top-6">
   <button onClick={deletee} className='className="inline-block px-2 py-1 duration-200 hover:bg-blue-100 rounded-full'>

    delete post

   </button>



   <button  className="inline-block px-2 py-1 duration-200 hover:bg-blue-100 rounded-full"  onClick={()=> navigate(`/edit/${posts.$id}`)}>

    editpost posttt

   </button>
</div>

    
)} */
