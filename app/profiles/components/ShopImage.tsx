import { useCurrentUser } from 'app/hooks/useCurrentUser';
import { useQuery, useRouter, useSession } from 'blitz';
import React, { useState } from 'react'
import updateProfile from '../mutations/updateProfile';
import getProfile from '../queries/getProfile';
import { Form, Field } from "react-final-form"


const ShopImage = () => {
    const [img, setImg] = useState('')

    const uploadFile = async (e) => {
       const files = e.target.files
       const data = new FormData()
       data.append('file', files[0])
       data.append('upload_preset', 'fileUpload')
       const res = await fetch("https://api.cloudinary.com/v1_1/dlccpotyg/image/upload", {
            method:"Post",
            body:data
       })
       const file = await res.json()
    //    console.log(file.secure_url)
       setImg(file.secure_url)
    //    console.log(img)
    }
    const [img1, setImg1] = useState('')
    const uploadFile1 = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'fileUpload')
        const res = await fetch("https://api.cloudinary.com/v1_1/dlccpotyg/image/upload", {
             method:"Post",
             body:data
        })
        const file = await res.json()
     //    console.log(file.secure_url)
        setImg1(file.secure_url)
     //    console.log(img)
     }


     const router = useRouter()
     const postId = useSession().userId
    const uid = useCurrentUser();
    const sqid = uid?.id;
    const [profile, { mutate }] = useQuery(getProfile, { where: { userId: sqid } })
    const imgSaq1 = profile?.imageA;
    const imgSaq2 = profile?.imageB;

    const onSubmit = async (formObj) => {
        try {
            if(imgSaq1!==''){
                const updated = await updateProfile({
                    where: { userId: postId },
                    data: { 
                        // imageA: img,
                        imageB: img1,
                     },
                })
            }else if(imgSaq2!==''){
                const updated = await updateProfile({
                    where: { userId: postId },
                    data: { 
                        imageA: img,
                        // imageB: img1,
                     },
                })
            }else if(imgSaq2==='' && imgSaq1===''){
                const updated = await updateProfile({
                            where: { userId: postId },
                            data: { 
                                imageA: img,
                                imageB: img1,
                             },
                        })
            }
            // else{
            //     const updated = await updateProfile({
            //         where: { userId: postId },
            //         data: { 
            //             imageA: img,
            //             imageB: img1,
            //          },
            //     })

            // }
           
            mutate(profile)
            // router.push("/posts/[postId]", `/posts/${updated.id}`)
            alert("phote Edit Successfully")
            router.push("/profiles")
        } catch (error) {
            alert("Error creating article " + JSON.stringify(error, null, 2))
        }

    }
    // console.log(profile)
    return (
        <div>
             <Form
                onSubmit={onSubmit}
                initialValues={profile}
            >
                {({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} style={{gap:'1rem',display:'flex', flexDirection:'column', width:'60%' ,margin:'auto', marginTop:'2rem'}}>
                      <div style={{width:'70%', margin:'auto'}}>
                     <img src={imgSaq1} alt="SomeThing went wrong upload again" style={{width:'6rem', height:'6rem'}}/>
                            <Field name="imagesA">
                            {({input})=>(
                                <input placeholder="Enter Image URL" type="file" {...input} onChange={(e) => uploadFile(e)}/>
                            )}
                        </Field>
                        { img=='' && <p>Upload and wait for image...</p> } 
                          { img!='' && 
                           <img src={img} style={{width:'6rem', height:'6rem'}} />
                        }
                        </div>
                        <div style={{width:'70%', margin:'auto'}}>
                        <img src={imgSaq2} alt="SomeThing went wrong upload again" style={{width:'6rem', height:'6rem'}}/>
                            <Field name="imagesB">
                            {({input})=>(
                                <input placeholder="Enter Image URL" type="file" {...input} onChange={(e) => uploadFile1(e)}/>
                            )}
                        </Field>
                        { img1=='' && <p>Upload and wait for image...</p> } 
                          { img1!='' && 
                           <img src={img1} style={{width:'6rem', height:'6rem'}} />
                        }
                           
                       </div>

                      
                            <button type="submit" style={{backgroundColor:'green', color:'white', border:'none', padding:".52rem"}}>
                               Update Image
                            </button>
                        
                    </form>
                )}

            </Form>



{/* 
            <div style={{width:'70%', margin:'auto',gap:'1rem', display:'flex', justifyContent:'center', marginTop:'3rem'}}>
            <img src={imgSaq1} alt="missing" style={{width:'6rem', height:'6rem'}}/>
            <img src={imgSaq2} alt="missing" style={{width:'6rem', height:'6rem'}}/>
            </div> */}
        </div>
    )
}

export default ShopImage
