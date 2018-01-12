import React from "react";
import Proptypes from 'prop-types';
import styles from "./styles.scss"

//    !!!State component translation!!!

// class Footer extends React.Component {
//   static contextTypes = {
//     t: Proptypes.func.isRequired
//   };
//   render(){
//     return(
//     <footer className={styles.footer}>
//         <div className={styles.column}>
//           <nav className={styles.nav}>
//             <ul className={styles.list}>
//               <li className={styles.listItem}>{this.context.t("About Us")}</li>
//               <li className={styles.listItem}>Support</li>
//               <li className={styles.listItem}>Blog</li>
//               <li className={styles.listItem}>Press</li>
//               <li className={styles.listItem}>API</li>
//               <li className={styles.listItem}>Jobs</li>
//               <li className={styles.listItem}>Privacy</li>
//               <li className={styles.listItem}>Terms</li>
//               <li className={styles.listItem}>Directory</li>
//               <li className={styles.listItem}>Language</li>
//             </ul>
//           </nav>
//         </div>
//         <div className={styles.column}>
//           <span className={styles.copyright}>©2018 instagram</span>
//         </div>
//       </footer>
//     );
//   }
// }


//    !!!Stateless component translation!!!

const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>{context.t("About Us")}</li>
          <li className={styles.listItem}>{context.t("Support")}</li>
          <li className={styles.listItem}>{context.t("Blog")}</li>
          <li className={styles.listItem}>{context.t("Press")}</li>
          <li className={styles.listItem}>{context.t("API")}</li>
          <li className={styles.listItem}>{context.t("Jobs")}</li>
          <li className={styles.listItem}>{context.t("Privacy")}</li>
          <li className={styles.listItem}>{context.t("Terms")}</li>
          <li className={styles.listItem}>{context.t("Directory")}</li>
          <li className={styles.listItem}>{context.t("Language")}</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}>{context.t("©2018 instagram")}</span>
    </div>
  </footer>
);

Footer.contextTypes = {
  t: Proptypes.func.isRequired
};

export default Footer;