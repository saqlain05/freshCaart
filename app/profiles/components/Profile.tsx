import React, { useEffect, useState } from 'react'
import styles from '../../styles/Profile.module.scss'
import {Form , Field} from 'react-final-form'
import { Router, useMutation, useSession } from 'blitz'
import upsertProfile from '../mutations/upsertProfile'

const Profile = ({url}) => {
//     const [lat, setLat] = useState(0)
//     const [long, setLong] = useState(0)
//     useEffect(() => {
//     window.navigator.geolocation.getCurrentPosition((psoition) => {
//       console.log(psoition)
//       setLat(psoition.coords.latitude)
//       setLong(psoition.coords.longitude)
//     })
//     console.log(lat, long)
//   }, [lat, long])
    console.log(url === 'http://localhost:3000/orders')
    const userId = useSession().userId

    const [upsertProfileMutation] = useMutation(upsertProfile)

    // const [img, setImg] = useState('')

    // const uploadFile = async (e) => {
    //    const files = e.target.files
    //    const data = new FormData()
    //    data.append('file', files[0])
    //    data.append('upload_preset', 'fileUpload')
    //    const res = await fetch("https://api.cloudinary.com/v1_1/dlccpotyg/image/upload", {
    //         method:"Post",
    //         body:data
    //    })
    //    const file = await res.json()
    // //    console.log(file.secure_url)
    //    setImg(file.secure_url)
    // //    console.log(img)
    // }
    // const [img1, setImg1] = useState('')

    // const uploadFile1 = async (e) => {
    //    const files = e.target.files
    //    const data = new FormData()
    //    data.append('file', files[0])
    //    data.append('upload_preset', 'fileUpload')
    //    const res = await fetch("https://api.cloudinary.com/v1_1/dlccpotyg/image/upload", {
    //         method:"Post",
    //         body:data
    //    })
    //    const file = await res.json()
    // //    console.log(file.secure_url)
    //    setImg1(file.secure_url)
    // //    console.log(img)
    // }
   

    const handleForm = async (formObj) => {
        
        try {
            const profile = await upsertProfileMutation({
                where: {
                    userId: userId,
                    // id: post.id
                },
                update: {
                    address: formObj.address,
                    city: formObj.city,
                    closeTime: formObj.closeTime,
                    firstName: formObj.firstName,
                    lastName: formObj.lastName,
                    maxOrderAcceptTime: formObj.maxOrderAcceptTime,
                    openTime: formObj.openTime,
                    phone: (formObj.phone).toString(),
                    pincode: (formObj.pincode).toString(),
                    shopName: formObj.shopName,
                    whatsapp: (formObj.whatsapp).toString(),
                    // imageA : img,
                    // imageB : img1,
                    
                },
                create: {
                   user: {connect: {id: userId}},
                   address: formObj.address,
                   city: formObj.city,
                   closeTime: formObj.closeTime,
                   firstName: formObj.firstName,
                   lastName: formObj.lastName,
                   maxOrderAcceptTime: formObj.maxOrderAcceptTime,
                   openTime: formObj.openTime,
                   phone: (formObj.phone).toString(),
                   pincode: (formObj.pincode).toString(),
                   shopName: formObj.shopName,
                   whatsapp: (formObj.whatsapp).toString(),
                //    imageA : img,
                //    imageB : img1,
                }
            })
            if(url === 'http://localhost:3000/orders') Router.back()
            Router.push('/products')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.mainDiv}>
            <h3 className={styles.header}>Profile</h3>
            <Form onSubmit={(formObj)=>{
                alert("submitting!");
                handleForm(formObj)
                // console.log(formObj)
            }}>
                {({ handleSubmit, submitting, pristine })=>(
                    <form className={styles.formDiv} onSubmit={handleSubmit}>
                        <Field name="firstName">
                            {({input})=>( 
                                <input placeholder="First Name" type="text" {...input} />
                            )}
                        </Field>
                        <Field name="lastName">
                            {({input})=>(
                                <input placeholder="Last Name" type="text" {...input} />
                            )}
                        </Field>
                        <Field name="shopName">
                            {({input})=>(
                                <input placeholder="Shop Name" type="text" {...input} />
                            )}
                        </Field>
                    {/* <div className={styles.shop}>
                        <p style={{textAlign:'center'}}>Upload Shop Image</p>
                        <div className={styles.imgAB}>
                            
                            <div>
                            <Field name="imageA">
                            {({input})=>(
                                <input placeholder="Enter Image URL" type="file" {...input} onChange={(e) => uploadFile(e)}/>
                            )}
                        </Field>
                        { img=='' && <p>Upload and wait for image...</p> } 
                          { img!='' && 
                        //    <>
                           <img src={img} style={{width:'10rem', height:'10rem'}} />
                        //    </>
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
                        //    <>
                           <img src={img1} style={{width:'10rem', height:'10rem'}} />
                        //    </>
                        }
                        </div>
                        </div>
                        </div> */}
                        
                        <Field name="phone">
                            {({input})=>(
                                <input placeholder="Phone Number" type="number" {...input} />
                            )}
                        </Field>
                        
                        <Field name="whatsapp">
                            {({input})=>(
                                <input placeholder="Whatsapp Number" type="number" {...input} />
                            )}
                        </Field>
                        <Field name="address">
                            {({input})=>(
                                <input placeholder="Address" type="textarea" {...input} />
                            )}
                        </Field>
                        <Field name="city">
                            {({input})=>(
                                <input placeholder="City" type="text" {...input} />
                            )}
                        </Field>
                        <Field name="pincode">
                            {({input})=>(
                                <input placeholder="Pin Code" type="number" {...input} />
                            )}
                        </Field>
                        <Field name="openTime">
                            {({input})=>(
                                <input placeholder="Shop Open Time" type="text" {...input} />
                            )}
                        </Field>
                        <Field name="closeTime">
                            {({input})=>(
                                <input placeholder="Shop Close Time" type="text" {...input} />
                            )}
                        </Field>
                        <Field name="maxOrderAcceptTime">
                            {({input})=>(
                                <input placeholder="Last Order Accept Time" type="text" {...input} />
                            )}
                        </Field>

                        <button type="submit" disabled={submitting || pristine}>Save Profile</button>

                    </form>
                )}
            </Form>
        </div>
    )
}

export default Profile
