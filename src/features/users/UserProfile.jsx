import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addUsers, selectAllUsers, selectUserById } from "./usersSlice";
import { fetchUsers } from "../../services/api"; // API function
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
`;

const Info = styled.p`
  font-size: 16px;
  color: #555;
`;

const PointsBadge = styled.span`
  display: inline-block;
  background-color: ${({ points }) => (points > 50 ? "gold" : "gray")};
  color: white;
  padding: 8px 12px;
  border-radius: 15px;
  font-weight: bold;
  margin: 10px 0;
`;

const Transactions = styled.ul`
  list-style: none;
  padding: 0;
`;

const TransactionItem = styled.li`
  background: #f5f5f5;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const UserProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const user = useSelector((state) => selectUserById(state, userId)); // Fetch single user

  useEffect(() => {
    if (users.length === 0) {
      // Only fetch users if Redux is empty
      const loadUsers = async () => {
        const data = await fetchUsers();
        dispatch(addUsers(data));
      };
      loadUsers();
    }
  }, [dispatch, users.length]);

  if (!user)
    return (
      <Container>
        <Title>User Not Found</Title>
      </Container>
    );

  return (
    <Container>
      <Title>{user.name}</Title>
      <Info>Email: {user.email}</Info>
      <PointsBadge points={user.points}>Points: {user.points}</PointsBadge>

      <h3>Transaction History</h3>
      {user.transactions && user.transactions.length > 0 ? (
        <Transactions>
          {user.transactions.map((transaction, index) => (
            <TransactionItem key={index}>
              <span>{transaction.description}</span>
              <span>{transaction.amount} pts</span>
            </TransactionItem>
          ))}
        </Transactions>
      ) : (
        <p>No transactions available.</p>
      )}

      <BackButton onClick={() => window.history.back()}>Go Back</BackButton>
    </Container>
  );
};

export default UserProfile;
