import upsertProfile from 'app/profiles/mutations/upsertProfile'
import { Router, useMutation, useSession } from 'blitz'
import React, { useEffect, useState } from 'react'
import {Form , Field} from 'react-final-form'
import styles from '../../styles/Profile.module.scss'

const Signup2 = () => {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    let user
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((psoition) => {
          console.log(psoition)
          setLat(psoition.coords.latitude)
          setLong(psoition.coords.longitude)
        })
        console.log(lat, long)
      }, [lat, long])


    // const userId = useSession().userId
    const [upsertProfileMutation] = useMutation(upsertProfile)

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

    const handleForm = async (formObj) => {
        user = JSON.parse(window.localStorage.getItem('saquser') || '{}')
        console.log(user)
        try {
            const profile = await upsertProfileMutation({
                where: {
                    userId: user.id
                },
                update: {
                    
                    imageA : img,
                    imageB : img1,
                    latitude : lat.toString(),
                   longitude : long.toString(),
                    
                },
                create: {
                   user: {connect: {id: user.id}},
                   
                   imageA : img,
                   imageB : img1,
                   latitude : lat.toString(),
                   longitude : long.toString(),
                }
            })
            // if(url === 'http://localhost:3000/orders') Router.back()
            window.localStorage.removeItem("saquser");
            Router.push('/login')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
             <div className={styles.mainDiv}>
            <h3 className={styles.header}>Upload Shop Image</h3>
            <Form onSubmit={(formObj)=>{
                alert("submitting!");
                handleForm(formObj)
                // console.log(formObj)
            }}>
                {({ handleSubmit, submitting, pristine })=>(
                    <form className={styles.formDiv} onSubmit={handleSubmit}>
                        
                     <div className={styles.shop}>
                        {/* <p style={{textAlign:'center'}}>Upload Shop Image</p> */}
                        <div className={styles.imgAB}>
                           
                            <div>
                            <Field name="imageA">
                            {({input})=>(
                                <input placeholder="Enter Image URL" type="file" {...input} onChange={(e) => uploadFile(e)}/>
                            )}
                        </Field>
                        { img=='' && <p>Upload and wait for image...</p> } 
                          { img!='' && 
                      
                           <img src={img} style={{width:'10rem', height:'10rem'}} />
                        
                        }
                            </div>
                       
                        <div>
                        <Field name="imageB">
                            {({input})=>(
                                <input placeholder="Enter Image URL" type="file" {...input} onChange={(e) => uploadFile1(e)}/>
                            )}
                        </Field>
                        { img1=='' && <p>Upload and wait for image...</p> } 
                          { img1!='' && 
                        
                           <img src={img1} style={{width:'10rem', height:'10rem'}} />
                        
                        }
                        </div>
                        </div>
                        </div>
                        
                       

                        <button type="submit" >Sign Up</button>

                    </form>
                )}
            </Form>
        </div>
        </div>
    )
}

export default Signup2
