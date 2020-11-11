import React from 'react'
import { Form, Field } from "react-final-form"
import { useParam, useQuery, useRouter, useSession } from "blitz"
import getProfile from '../queries/getProfile'
import updateProfile from '../mutations/updateProfile'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import styles from '../../styles/Edit.module.scss'

const Profile2 = () => {
    const router = useRouter()
    const postId = useSession().userId
    const uid = useCurrentUser();
    const sqid = uid?.id;
    const [profile, { mutate }] = useQuery(getProfile, { where: { userId: sqid } })
    const onSubmit = async (formObj) => {
        try {
            const updated = await updateProfile({
                where: { userId: postId },
                data: { 
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
                    whatsapp: (formObj.whatsapp).toString() },
            })
            mutate(profile)
            // router.push("/posts/[postId]", `/posts/${updated.id}`)
            router.push("/")
        } catch (error) {
            alert("Error creating article " + JSON.stringify(error, null, 2))
        }

    }

    return (
        <div className={styles.mainDiv}>
            <h3>Edit Your Profile</h3>
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
