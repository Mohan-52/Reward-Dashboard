import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./features/users/UserList";
import UserProfile from "./features/users/UserProfile";
import ActivityFeed from "./features/activities/ActivityFeed";
import RewardsList from "./features/rewards/RewardsList";
import AdminDashboard from "./features/admin/AdminDashboard";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route path="/activities" element={<ActivityFeed />} />
          <Route path="/rewards" element={<RewardsList />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
