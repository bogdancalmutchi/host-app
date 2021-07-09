import CardComponent from '../CardComponent/CardComponent';
import UserEntryComponent from '../UserEntryComponent/UserEntryComponent';
import './UsersListComponent.css'

const UsersListComponent = (props) => {

  return (
    <CardComponent>
      <div className={'usersContainer'}>
        {props.users.map(user => <UserEntryComponent key={Math.random()} user={user}/>)}
      </div>
    </CardComponent>
  )
}

export default UsersListComponent;