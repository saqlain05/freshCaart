import React from "react"
import { LabeledTextField } from "app/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/components/Form"
import signup from "app/auth/mutations/signup"
import { SignupInput, SignupInputType } from "app/auth/validations"
import styles from '../../styles/Signup.module.scss'
import { Link,Router } from "blitz"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  return (
    <div className={styles.mainDiv}>
      <h3 className={styles.head}>Create an Account</h3>

      <Form<SignupInputType>
        className={styles.formDiv}
        submitText="Create Account"
        schema={SignupInput}
        initialValues={{ name: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await signup({name: values.name, email: values.email+'@gmail.com', password: values.password })
            alert('Please Login to continue')
            // Router.push("/login");
            props.onSuccess && props.onSuccess()
          } catch (error) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { phone: "This phone number is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <LabeledTextField className={styles.input} name="name" label="Name" placeholder="Name" type="text" />
        <LabeledTextField className={styles.input} name="email" label="phone" placeholder="mobile" type="text" />
        <LabeledTextField className={styles.input} name="password" label="Password" placeholder="Password" type="password" />
      </Form>
      {/* <Link href="login"><a className={styles.anchor}>alreay have account?? Login</a></Link> */}
      <div style={{ marginTop: "1rem" }} className={styles.linkDiv}>
        Already Have account? <Link href="/login">Login</Link>
      </div>
    </div>
  )
}

export default SignupForm
