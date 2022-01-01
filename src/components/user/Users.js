import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { retrieveUsers } from "../../state/actions/user";
import Container from "../Layout/Container";
import WrapperContainer from "../Wrapper/WrapperContainer";
import httpRequest from "../../util/ajax/request";

const url = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user);

  useEffect(() => {
    const fetchData = (url) => {
      httpRequest(url, "get")
        .then(res => dispatch(retrieveUsers(res.data)));
    }

    fetchData(url)
  }, [dispatch]);

  console.log("users", users);

  const renderContent = (users) => (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.username} - {user.email}</li>
      ))}
    </ul>
  )

  return (
    <div>
      <Container>
        <WrapperContainer>
          <h2>Users</h2>
          <p>Placeholder</p>
          {renderContent(users)}
        </WrapperContainer>
      </Container>
    </div>
  );
}

export default Users;
