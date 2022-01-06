import UsersContext from './store/users-context';

// import Users from './components/Users';
import UserFinder from './components/UserFinder';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      {/* <Users /> */}
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
