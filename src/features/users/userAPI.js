const BASE_URL = "http://localhost:3001";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users?email=${email}`);
    const users = await response.json();

    if (users.length === 0) {
      throw new Error("User not found");
    }

    const user = users[0];

    if (user.password !== password) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    throw error.message || "Login failed";
  }
};
