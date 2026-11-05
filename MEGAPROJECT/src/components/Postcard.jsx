import {Link} from "react-router-dom"
import service from "../appwrite/confi"

function Postcard({$id , title ,featureimage}) {

  console.log("IMAGE ID:", featureimage);
console.log("IMAGE URL:", service.priview(featureimage));


  return (
  <Link to={`/post/${$id}`}>

    {/* {console.log("IMAGE ID:haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", featureimage)} */}


<div className='w-full bg-gray-100 rounded-xl p-4' >
    <div   className='w-full justify-center mb-4'>
        <img src={service.priview(featureimage)} alt={title}  className='rounded-xl' />

        {console.log(featureimage)}

       
        


        
    </div>

<h2 className="text-xl font-bold">{title}</h2>
</div>

  </Link>
  )
}

export default Postcard