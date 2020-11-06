import React from 'react'
import styles from '../../styles/Profile.module.scss'
import {Form , Field} from 'react-final-form'

const Profile = () => {
    return (
        <div className={styles.mainDiv}>
            <h3 className={styles.header}>Profile</h3>
            <Form onSubmit={(formObj)=>{
                alert("submitting!");
                console.log(formObj);
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
                                <input placeholder="Pin Code" type="text" {...input} />
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
