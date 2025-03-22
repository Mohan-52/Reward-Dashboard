import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { fetchUsers } from "../../services/api"; // API function
import styled from "styled-components"; // Import Styled Components

const UsersListContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  background: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  font-size: 16px;
`;

const Points = styled.span`
  font-weight: bold;
  color: #28a745;
`;

const ViewLink = styled(Link)`
  padding: 5px 10px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  &:hover {
    background: #0056b3;
  }
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 300px;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
`;

const SortingSelect = styled.select`
  width: 40%;
  max-width: 120px;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const UsersList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("name");

  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  useEffect(() => {
    if (users.length === 0) {
      const loadUsers = async () => {
        const data = await fetchUsers();
        dispatch(addUsers(data));
      };
      loadUsers();
    }
  }, [dispatch, users.length]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "points") {
      return b.points - a.points;
    }
  });

  return (
    <>
      <Layout />
      <UsersListContainer>
        <Title>Users List</Title>
        <FiltersContainer>
          <SearchInput
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SortingSelect onChange={(e) => setSortType(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="points">Sort by Points</option>
          </SortingSelect>
        </FiltersContainer>

        <UserList>
          {sortedUsers.map((user) => (
            <UserItem key={user.id}>
              <UserInfo>
                {user.name} | <Points>Points: {user.points}</Points>
              </UserInfo>
              <ViewLink to={`/users/${user.id}`}>View Details</ViewLink>
            </UserItem>
          ))}
        </UserList>
      </UsersListContainer>
    </>
  );
};

export default UsersList;
