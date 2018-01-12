import React from "react";
//import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";
import Proptypes from "prop-types";
import FacebookLogin from "react-facebook-login";

export const SignupForm = (props, context) => <div className={formStyles.formComponent}>
           <h3 className={formStyles.signupHeader}>
             {context.t(
               "Sign up to see photos and videos from your friends."
             )}
           </h3>
           <FacebookLogin appId="541464489550594" autoLoad={true} fields="name,email,picture" callback={props.handleFacebookLogin} cssClass={formStyles.button} icon="fa-facebook-official" textButton={context.t("Login with Facebook")} />
           {/* <button className={formStyles.button}>
             {" "}
             <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
             {context.t("Login with Facebook")}
           </button> */}
           <span className={formStyles.divider}>or</span>
           <form className={formStyles.form} onSubmit={props.handleSubmit}>
             <input type="email" placeholder="Email" className={formStyles.textInput} value={props.emailValue} name="email" onChange={props.handleInputChange} />
             <input type="text" placeholder="Full Name" className={formStyles.textInput} value={props.fullnameValue} name="name" onChange={props.handleInputChange} />
             <input type="username" placeholder="Username" className={formStyles.textInput} value={props.usernameValue} name="username" onChange={props.handleInputChange} />
             <input type="password" placeholder="Password" className={formStyles.textInput} value={props.passwordValue} name="password" onChange={props.handleInputChange} />
             <input type="submit" value="Sign up" className={formStyles.button} />
           </form>
           <p className={formStyles.terms}>
             {context.t("By signing up, you agree to our")} <span>
               {context.t("Terms & Privacy Policy")}
             </span>
           </p>
         </div>;

SignupForm.Proptypes = {
  emailValue: Proptypes.string.isRequired,
  nameValue: Proptypes.string.isRequired,
  usernameValue: Proptypes.string.isRequired,
  passwordValue: Proptypes.string.isRequired,
  handleInputChange: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  handleFacebookLogin: Proptypes.func.isRequired
}

SignupForm.contextTypes = {
  t: Proptypes.func.isRequired
};

export default SignupForm;