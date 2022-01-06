import { Component, Fragment /*useState, useEffect*/ } from 'react';

import UsersContext from '../store/users-context';

import Users from './Users';

import ErrorBoundary from './ErrorBoundary';

import styles from './UserFinder.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class UserFinder extends Component {
  // telling react that the UserFinder component should have access to UsersContext
  // can only set one context using this method
  static contextType = UsersContext;

  constructor() {
    super();

    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  // this method is called automatically by react when the UserFinder component is rendered for the first time
  // only runs once
  componentDidMount() {
    // send HTTP request...
    this.setState({ filteredUsers: this.context.users });
  }

  // this method is called automatically by react whenever the UserFinder component is re-evaluated (due to a state change)
  // we replaced useEffect with componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ),
      });
    }
  }

  handleSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.finder}>
          <input type="search" onChange={this.handleSearchChange.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// functional component
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) =>
//         user.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [searchTerm]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={styles.finder}>
//         <input type="search" onChange={handleSearchChange} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
