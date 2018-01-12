import React from 'react';
import styles from './styles.scss';
import { LoginForm, SignupForm } from 'components/AuthForms';
import Proptypes from 'prop-types'

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app" />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="logo" />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p className={styles.text}>
            {context.t("Don't have and account?")}{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              {context.t("Sign up")}
            </span>
          </p>
        )}

        {props.action === "signup" && (
          <p className={styles.text}>
            {context.t("Have an account?")}{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              {context.t("Log in")}
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>{context.t("Get the app")}</span>
        <div className={styles.appStores}>
          <img
            src={require("images/app-ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/app-android.png")}
            alt="Download it on the Androidstore"
          />
        </div>
      </div>
    </div>
  </main>
);


Auth.contextTypes = {
  t: Proptypes.func.isRequired
}

export default Auth;