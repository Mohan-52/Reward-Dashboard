const API_URL = "http://localhost:3001/activities"; // Adjust based on db.json

export const fetchActivities = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch activities");
  return response.json();
};

export const createActivity = async (activity) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(activity),
  });
  if (!response.ok) throw new Error("Failed to create activity");
  return response.json();
};

export const updateActivity = async (id, updatedActivity) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedActivity),
  });
  if (!response.ok) throw new Error("Failed to update activity");
  return response.json();
};

export const deleteActivity = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete activity");
  return id;
};
