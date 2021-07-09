import './UserEntryComponent.css';

const UserEntryComponent = (props) => {

  return (
    <div className={'userEntry'}>
      {props.user.username} ({props.user.age} years old)
    </div>
  );
};

export default UserEntryComponent;