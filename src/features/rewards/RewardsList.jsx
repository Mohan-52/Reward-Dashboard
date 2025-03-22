import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllRewards,
  selectAllRewards,
  removeReward,
} from "./rewardsSlice";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 10px;
  background: #f8f9fa;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const RewardCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const RewardTitle = styled.h4`
  margin: 0;
  color: #444;
`;

const RewardCost = styled.p`
  font-size: 14px;
  color: #777;
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border: none;
  background: #e63946;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #d62839;
  }
`;

const RewardsList = () => {
  const dispatch = useDispatch();
  const rewards = useSelector(selectAllRewards);

  useEffect(() => {
    dispatch(fetchAllRewards());
  }, [dispatch]);

  return (
    <>
      <Layout />
      <Container>
        <Title>Rewards List</Title>
        {rewards.map((reward) => (
          <RewardCard key={reward.id}>
            <div>
              <RewardTitle>{reward.title}</RewardTitle>
              <RewardCost>Cost: {reward.cost} points</RewardCost>
            </div>
            <DeleteButton onClick={() => dispatch(removeReward(reward.id))}>
              Delete
            </DeleteButton>
          </RewardCard>
        ))}
      </Container>
    </>
  );
};

export default RewardsList;
