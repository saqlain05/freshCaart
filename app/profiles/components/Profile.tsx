import React from 'react'
import styles from '../../styles/Profile.module.scss'
import {Form , Field} from 'react-final-form'
import { Router, useMutation, useSession } from 'blitz'
import upsertProfile from '../mutations/upsertProfile'

const Profile = () => {

    const userId = useSession().userId

    const [upsertProfileMutation] = useMutation(upsertProfile)

    const handleForm = async (formObj) => {
        try {
            const profile = await upsertProfileMutation({
                where: {
                    userId: userId
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
                    whatsapp: (formObj.whatsapp).toString()
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
                   whatsapp: (formObj.whatsapp).toString()
                }
            })
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
            }}>
                {({ handleSubmit })=>(
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

                        <button type="submit">Update Profile</button>

                    </form>
                )}
            </Form>
        </div>
    )
}

export default Profile
