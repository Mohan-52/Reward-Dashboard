import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchActivities,
  createActivity,
  updateActivity,
  deleteActivity,
} from "./activityAPI";

// Async thunks for API calls
export const getActivities = createAsyncThunk("activities/getAll", async () => {
  return await fetchActivities();
});

export const addActivity = createAsyncThunk(
  "activities/add",
  async (activity) => {
    return await createActivity(activity);
  }
);

export const editActivity = createAsyncThunk(
  "activities/update",
  async ({ id, updatedActivity }) => {
    return await updateActivity(id, updatedActivity);
  }
);

export const removeActivity = createAsyncThunk(
  "activities/delete",
  async (id) => {
    return await deleteActivity(id);
  }
);

const activitiesSlice = createSlice({
  name: "activities",
  initialState: { activities: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.fulfilled, (state, action) => {
        state.activities = action.payload;
        state.status = "succeeded";
      })
      .addCase(addActivity.fulfilled, (state, action) => {
        state.activities.push(action.payload);
      })
      .addCase(editActivity.fulfilled, (state, action) => {
        const index = state.activities.findIndex(
          (a) => a.id === action.payload.id
        );
        if (index !== -1) state.activities[index] = action.payload;
      })
      .addCase(removeActivity.fulfilled, (state, action) => {
        state.activities = state.activities.filter(
          (a) => a.id !== action.payload
        );
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const selectAllActivities = (state) => state.activities.activities;
export default activitiesSlice.reducer;
