const API_URL = "http://localhost:3001/rewards";

// Fetch all rewards
export const fetchRewards = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Create a new reward
export const createReward = async (reward) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reward),
  });
  return response.json();
};

// Update an existing reward
export const updateReward = async (reward) => {
  const response = await fetch(`${API_URL}/${reward.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reward),
  });
  return response.json();
};

// Delete a reward
export const deleteReward = async (rewardId) => {
  await fetch(`${API_URL}/${rewardId}`, { method: "DELETE" });
  return rewardId;
};
