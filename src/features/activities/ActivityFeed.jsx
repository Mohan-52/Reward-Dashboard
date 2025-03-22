import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, selectAllActivities } from "./activitiesSlice";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 8px;
`;

const Filters = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ActivityItem = styled.div`
  background: white;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Points = styled.span`
  font-weight: bold;
  color: #007bff;
`;

const ActivityFeed = () => {
  const dispatch = useDispatch();
  const activities = useSelector(selectAllActivities);

  const [filterType, setFilterType] = useState("");
  const [filterUser, setFilterUser] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  // Filter activities based on user selections
  console.log(activities);
  const filteredActivities = activities.filter((activity) => {
    return (
      (!filterType || activity.activityType.includes(filterType)) &&
      (!filterUser || activity.user.includes(filterUser)) &&
      (!filterDate || activity.date.includes(filterDate))
    );
  });

  return (
    <Container>
      <h2>Activity Feed</h2>

      {/* Filter Options */}
      <Filters>
        <Input
          type="text"
          placeholder="Filter by Activity Type"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Filter by User"
          value={filterUser}
          onChange={(e) => setFilterUser(e.target.value)}
        />
        <Input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </Filters>

      {/* Activity List */}
      {filteredActivities.length > 0 ? (
        <ActivityList>
          {filteredActivities.map((activity) => (
            <ActivityItem key={activity.id}>
              <strong>{activity.activityType}</strong>
              <p>{activity.description}</p>
              <small>User: {activity.user}</small>
              <small>Date: {activity.date}</small>
              <Points>{activity.points} pts</Points>
            </ActivityItem>
          ))}
        </ActivityList>
      ) : (
        <p>No activities found.</p>
      )}
    </Container>
  );
};

export default ActivityFeed;
