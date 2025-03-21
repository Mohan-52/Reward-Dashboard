const BASE_URL = "http://localhost:3001";

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchUsers = () => fetchData("users");
export const fetchActivities = () => fetchData("activities");
export const fetchRewards = () => fetchData("rewards");
