import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const UserRow = (props) => (
  <div className={styles.container}>
    {props.userList.map(user => (
      <User
        username={user.username}
        profile_image={user.profile_image || require("images/noPhoto.jpg")}
        name={user.name}
      />
    ))}
  </div>
);

const User = (props,context) => (
  <div className={styles.user}>
    <ul>
      <img
        src={props.profile_image}
        alt={props.username}
        className={styles.profile}
      />
    </ul>
    <ul className={styles.text}>
      <tab>
        <span className={styles.username}>{props.username}</span>
      </tab>
      <tab>
        <span className={styles.name}>{props.name}</span>
      </tab>
    </ul>
    <ul className={styles.follow}>
        <input type="submit" value={context.t("Follow")} className={styles.button} />
    </ul>
  </div>
);

UserRow.propTypes = {
    userList : PropTypes.array.isRequired
}

User.contextTypes = {
    t : PropTypes.func.isRequired
}

export default UserRow;