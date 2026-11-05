import { useEffect } from 'react'
import { useCallback } from 'react'
import {useNavigate} from "react-router-dom"
import service from '../../appwrite/confi'
import {useForm, Watch} from "react-hook-form"
import Button from '../commonbut'
import Input from '../input'
import { useSelector } from 'react-redux'
import Select from '../index'

import RTE from '../RTE'

function Postform({post}) {
    const {register, handleSubmit, watch, getValues, setValue, control} = useForm({
        defaultValues : {
            title : post?.title || "" , 
            slug : post?.$id|| ""   ,
            content : post?.content|| ""    ,
            status : post?.status || "active"  
           }
    })

    const userdata = useSelector((state) => state.auth.userdata)

    const naigate = useNavigate()


    const Submit = async (data) =>  {
      
    console.log("FORM DATA:", data);

    // baaki existing code


        if(post){
            const file = data.image[0] ? await  service.uplodefile(data.image[0]) : null; 

            if(file){
                service.deletefile(post.featureimage)
            };
            const datadb = await  service.updatepost(post.$id, {
                ...data,
                featureimage: file ? file.$id : post.featureimage,
           
        });

            if(datadb) {
                naigate(`/post/${datadb.$id}`)
            }


        }else {
            const file = await  service.uplodefile(data.image[0])

            if(file){

                const fileId = file.$id;
                data.featureimage = fileId;


                const post = await service.createpost({
                    ...data,
                     userid : userdata.$id
            })
        
                if(post){
                    naigate(`/post/${post.$id}`)
                }
            }
        }

    }


    const Setslug = useCallback((value) => {
        if(value && typeof value ===  'string'){
            return value.trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        
    }

    return "";
},[])


useEffect(()=> {
    const subscription = watch((value , {name}) => {
        if(name === "title"){
            setValue("slug", Setslug(value.title), { shouldValidate: true })
        }

        return () => subscription.unsubscribe();
    })

}, [Watch , setValue , Setslug])
  return (
    <form onSubmit={handleSubmit(Submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                       setValue("slug", Setslug(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="content" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.priview(post.featuredimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit"   bgColor={post ? "bg-green-500" : "bg-pink-500"}  className="w-full bg-amber-400">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );


  
}

export default Postform



