import React, { useState } from 'react'
import { Form, Field } from "react-final-form"
import { Link, useParam, useQuery, useRouter, useSession } from "blitz"
import getProfile from '../queries/getProfile'
import updateProfile from '../mutations/updateProfile'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import styles from '../../styles/Edit.module.scss'
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile2 = () => {
    // const productimg = value.imageA;
    
    const router = useRouter()
    const postId = useSession().userId
    const uid = useCurrentUser();
    const sqid = uid?.id;
    const [profile, { mutate }] = useQuery(getProfile, { where: { userId: sqid } })
    const imgSaq1 = (profile?.imageA)
    const imgSaq2 = (profile?.imageB)
    const onSubmit = async (formObj) => {
        try {
            const updated = await updateProfile({
                where: { userId: postId },
                data: { 
                    address: formObj.address,
                    city: formObj.city,
                    firstName: formObj.firstName,
                    lastName: formObj.lastName,
                    maxOrderAcceptTime: formObj.maxOrderAcceptTime,
                    openTime: formObj.openTime,
                    closeTime: formObj.closeTime,
                    phone: (formObj.phone).toString(),
                    pincode: (formObj.pincode).toString(),
                    shopName: formObj.shopName,
                    whatsapp: (formObj.whatsapp).toString(),
                    // imageA: img,
                    // imageB: img1,
                 },
            })
            mutate(profile)
            // router.push("/posts/[postId]", `/posts/${updated.id}`)
            alert("profile Edit Successfully")
            router.push("/products")
        } catch (error) {
            alert("Error creating article " + JSON.stringify(error, null, 2))
        }

    }

    return (
        <div className={styles.mainDiv}>
            <h3>Edit Your Profile</h3>
            {/* <img src="" alt=""/> */}
            <Form
                onSubmit={onSubmit}
                initialValues={profile}
            >
                {({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} className={styles.formDiv}>
                    <div>
                        <label>First Name</label>
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>

                        <div>
                        <label>Last Name</label>
                            <Field
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="">Shop Name</label>
                            <Field
                                name="shopName"
                                component="input"
                                type="text"
                                placeholder="Shop Name"
                            />
                        </div>
                        <div style={{margin:'1rem 0'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                        <p style={{textAlign:'center', color:'green', marginBottom:'1rem'}}>Shop Image</p>
                        <p><Link href="/profiles/image"><a style={{textDecoration:'none', color:'green', cursor:'pointer'}}>
                           <FontAwesomeIcon icon={faPen}  />
                            </a></Link></p>
                        </div>
                        <div style={{display:'flex', justifyContent:'center', gap:'1rem'}}>
                        <img src={imgSaq1} alt="missing image" style={{width:'6rem', height:'6rem'}} />
                        <img src={imgSaq2} alt="missing image" style={{width:'6rem', height:'6rem'}} />
                        </div>
                        </div>
                        {/* <div className={styles.shop} style={{border: '2px solid green', margin:'1rem 0', padding:'.5rem'}}>
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
                        </div>
                    */}
                           
                           
                       

                        <div>
                            <label htmlFor="">Address</label>
                            <Field
                                name="address"
                                component="input"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                        <div>
                            <label htmlFor="">City</label>
                            <Field
                                name="city"
                                component="input"
                                type="text"
                                placeholder="City"
                            />
                        </div>
                        <div>
                            <label htmlFor="">WhatsApp</label>
                            <Field
                                name="whatsapp"
                                component="input"
                                type="text"
                                placeholder="WhatsApp"
                            />
                        </div>

                        
                        <div>
                            <label htmlFor="">Phone</label>
                            <Field
                                name="phone"
                                component="input"
                                type="text"
                                placeholder="Phone"
                            />
                        </div>
                        
                        {/* <div>
                            <Field
                                name="address"
                                component="input"
                                type="text"
                                placeholder="Image Url"
                            />
                        </div> */}
                       
                      
                        <div>
                            <label htmlFor="">Shop Open Time</label>
                            <Field
                                name="openTime"
                                component="input"
                                type="text"
                                placeholder="Shop Open Time"
                            />
                        </div>
                        <div>
                        <label htmlFor="">Shop Close Time</label>
                            <Field
                                name="closeTime"
                                component="input"
                                type="text"
                                placeholder="Shop Close Time"
                            />
                        </div>
                        <div>
                            <label htmlFor="">Max Order Accept Time</label>
                            <Field
                                name="maxOrderAcceptTime"
                                component="input"
                                type="text"
                                placeholder="Max Order Accept Time"
                            />
                        </div>

                        

                            <button type="submit">
                               Update Profile
                            </button>
                        
                    </form>
                )}

            </Form>
        </div>
    )
}

export default Profile2
