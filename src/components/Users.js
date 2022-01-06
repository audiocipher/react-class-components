import { Component } from 'react';
import User from './User';

import styles from './Users.module.css';

class Users extends Component {
  // use the constructor to initialize state
  constructor() {
    super(); // must call super() when inheriting/extending from another class (calls the parent's constructor)

    // state is ALWAYS an object named "state" in class-based components
    this.state = {
      showUsers: true,
      more: 'example', // this state will not be lost when state is changed
      // nested: {
      //   example: 'example'
      // }
    };
  }

  // used for Error Boundary
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users provided');
    }
  }

  handleToggleUsers() {
    // use the setState method to change the state
    // setState always takes in an object
    // setState will NOT overwrite, but will instead merge any changes with the existing state

    // if we need the current/previous state to make a change
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
    // this.setState({ showUsers: false }); // if we don't need the current state to make a change
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={styles.users}>
        <button onClick={this.handleToggleUsers.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const handleToggleUsers = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={styles.users}>
//       <button onClick={handleToggleUsers}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
