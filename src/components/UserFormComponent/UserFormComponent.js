import React, { useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';

import './UserFormComponent.css';

const UserFormComponent = (props) => {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const hasNegativeAgeError = age.length > 0 && age < 1;
  const hasEmptyInput = age.length === 0 || username.length === 0;
  const negativeAgeErrorMessage = 'Please enter a valid age (>0)';
  const emptyInputErrorMessage = 'Please enter a valid name and age (non-empty values)';

  const errorMessages = {
    negative: negativeAgeErrorMessage,
    empty: emptyInputErrorMessage
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const submittedInfo = {
      username: username,
      age: age
    }

    if (!(hasEmptyInput || hasNegativeAgeError)) {
      props.onAddNewUser(submittedInfo);
    }

    if (hasEmptyInput) {
      props.onError(errorMessages.empty);
    }

    if (hasNegativeAgeError) {
      props.onError(errorMessages.negative);
    }

    setUsername('');
    setAge('');
  }

  const userInputHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageInputHandler = (event) => {
    setAge(event.target.value);
  }

  return (
    <CardComponent>
      <form onSubmit={onSubmitHandler}>
        <div className={'formElements'}>
          <div className={'formElement'}>
            <label>Username</label>
            <input type={'text'} onChange={userInputHandler} value={username}/>
          </div>
          <div className={'formElement'}>
            <label>Age (Years)</label>
            <input type={'number'} onChange={ageInputHandler} value={age}/>
          </div>
        </div>
        <div>
          <button className={'formButton'} type={'submit'}>Add User</button>
        </div>
      </form>
    </CardComponent>
  );
};

export default UserFormComponent;