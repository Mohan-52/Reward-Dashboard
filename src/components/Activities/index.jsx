import React from "react";
import ActivityForm from "../../features/activities/ActivityForm";
import ActivityFeed from "../../features/activities/ActivityFeed";
import Layout from "../layout/Layout";

function Activities() {
  return (
    <>
      <Layout />
      <ActivityForm />
      <ActivityFeed />
    </>
  );
}

export default Activities;
