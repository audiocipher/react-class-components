import { Component } from 'react';

import styles from './User.module.css';

// class based component
class User extends Component {
  // runs before a component is removed from the DOM
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}

// functional component
// const User = (props) => {
//   return <li className={styles.user}>{props.name}</li>;
// };

export default User;
