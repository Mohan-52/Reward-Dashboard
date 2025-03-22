import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./features/users/UserList";
import UserProfile from "./features/users/UserProfile";

import RewardsList from "./features/rewards/RewardsList";
import AdminDashboard from "./features/admin/AdminDashboard";
import Activities from "./components/Activities";

import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/rewards" element={<RewardsList />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
