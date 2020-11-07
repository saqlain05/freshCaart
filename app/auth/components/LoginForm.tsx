import React from "react"
import { Link } from "blitz"
import { LabeledTextField } from "app/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/components/Form"
import login from "app/auth/mutations/login"
import { LoginInput, LoginInputType } from "app/auth/validations"
import styles from '../../styles/Signup.module.scss'
// type LoginFormProps = {
//   onSuccess?: () => void
// }

export const LoginForm = ({handleLogin}) => {
  return (
    <div className={styles.mainDiv}>
      <h3 className={styles.head}>Login</h3>

      <Form<LoginInputType>
         className={styles.formDiv}
        submitText="Log In"
        schema={LoginInput}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const user = await login({ email: values.email, password: values.password })
            handleLogin(user)
          } catch (error) {
            if (error.name === "AuthenticationError") {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        {/* <LabeledTextField className={styles.input} name="email" label="Email" placeholder="Email" /> */}
        <LabeledTextField className={styles.input} name="email" label="Email" placeholder="Email" />
        <LabeledTextField className={styles.input} name="password" label="Password" placeholder="Password" type="password" />
      </Form>

      <div style={{ marginTop: "1rem" }} className={styles.linkDiv}>
        Don't Have account? <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default LoginForm
