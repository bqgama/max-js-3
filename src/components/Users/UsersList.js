import React from "react";

// import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
          // <UserItem
          //   key={user.id}
          //   username={user.username}
          //   age={user.age}
          // />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;