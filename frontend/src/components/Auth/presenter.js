import React from 'react';
import styles from './styles.scss';


const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app" />
    </div>
    <div className={styles.column}>
      <div className={styles.whiteBox}>
        {(()=>{
            console.log(props.action);
            switch(props.action){
                case "login":
                    return (
                    <p>
                        Don't have and account?{" "}
                        <span onClick={props.changeAction} className={styles.changeLink}>
                        Sign up
                        </span>
                    </p>
                    );
                case "signup":
                    return <p>
                        Have an account?{" "}
                        <span onClick={props.changeAction} className={styles.changeLink}>
                          Log in
                        </span>
                      </p>;
                default:
                  return null;
            }
        })()}

      </div>
      <div className={styles.appBox}>
        <span>Get the app</span>
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

export default Auth;