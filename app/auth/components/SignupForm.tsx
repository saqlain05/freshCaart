import React from "react"
import { LabeledTextField } from "app/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/components/Form"
import signup from "app/auth/mutations/signup"
import { SignupInput, SignupInputType } from "app/auth/validations"
import styles from '../../styles/Login.module.scss'
import { Link } from "blitz"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.head}>Create an Account</h1>

      <Form<SignupInputType>
        className={styles.form}
        submitText="Create Account"
        schema={SignupInput}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await signup({ email: values.email, password: values.password })
            props.onSuccess && props.onSuccess()
          } catch (error) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <LabeledTextField className={styles.input} name="email" label="Email" placeholder="Email" />
        <LabeledTextField className={styles.input} name="password" label="Password" placeholder="Password" type="password" />
      </Form>
      <Link href="login"><a className={styles.anchor}>alreay have account?? Login</a></Link>
    </div>
  )
}

export default SignupForm
