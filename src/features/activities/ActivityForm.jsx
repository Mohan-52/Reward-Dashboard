import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "./activitiesSlice";
import styled from "styled-components";

// Styled Components
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 280px;
  margin: 20px auto;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ActivityForm = () => {
  const dispatch = useDispatch();
  const [activityType, setActivityType] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activityType || !description || !points) return;

    dispatch(
      addActivity({ activityType, description, points: Number(points) })
    );

    setActivityType("");
    setDescription("");
    setPoints("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Activity Type"
        value={activityType}
        onChange={(e) => setActivityType(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Points"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
      />
      <SubmitButton type="submit">Log Activity</SubmitButton>
    </FormContainer>
  );
};

export default ActivityForm;
