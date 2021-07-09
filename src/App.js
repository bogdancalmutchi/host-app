import React, { useState } from 'react';
import UserFormComponent from './components/UserFormComponent/UserFormComponent';
import UsersListComponent from './components/UsersListComponent/UsersListComponent';
import ModalComponent from './components/ModalComponent/ModalComponent';

// const DUMMY_USERS = [
//   {
//     key: 1,
//     username: 'Gicu Gicutzu',
//     age: 33
//   },
//   {
//     key: 2,
//     username: 'Gigel Gelu',
//     age: 33
//   }
// ];

const App = () => {

  const [users, setUsers] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisibility, setModalVisibility] = useState(true);

  const onAddNewUserHandler = (submittedInfo) => {
    setUsers(previousUsers => {
      return [submittedInfo, ...previousUsers]
    })
  }

  const onErrorHandler = (errorMessages) => {
    console.log('inside onErrorHandler');
    console.log('message:', errorMessages);
    setErrorMessage(errorMessages);
    setModalVisibility(true);
  }

  const modalVisibilityHandler = (value) => {
    setModalVisibility(value);
  }

  return (
    <div>
      <UserFormComponent onAddNewUser={onAddNewUserHandler} onError={onErrorHandler}/>
      {users && <UsersListComponent users={users}/>}
      {(errorMessage && modalVisibility) && <ModalComponent isModalVisible={modalVisibilityHandler}>{errorMessage}</ModalComponent>}
    </div>
  );
};

export default App;
