import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchRewards,
  createReward,
  updateReward,
  deleteReward,
} from "./rewardsAPI";

// Async Thunks for API calls
export const fetchAllRewards = createAsyncThunk(
  "rewards/fetchAll",
  async () => {
    return await fetchRewards();
  }
);

export const addNewReward = createAsyncThunk(
  "rewards/addNew",
  async (reward) => {
    return await createReward(reward);
  }
);

export const modifyReward = createAsyncThunk(
  "rewards/modify",
  async (reward) => {
    return await updateReward(reward);
  }
);

export const removeReward = createAsyncThunk(
  "rewards/remove",
  async (rewardId) => {
    return await deleteReward(rewardId);
  }
);

// Initial State
const initialState = {
  rewards: [],
  status: "idle",
  error: null,
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    redeemReward: (state, action) => {
      const rewardIndex = state.rewards.findIndex(
        (r) => r.id === action.payload
      );
      if (rewardIndex !== -1) {
        state.rewards.splice(rewardIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRewards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllRewards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rewards = action.payload;
      })
      .addCase(fetchAllRewards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewReward.fulfilled, (state, action) => {
        state.rewards.push(action.payload);
      })
      .addCase(modifyReward.fulfilled, (state, action) => {
        const index = state.rewards.findIndex(
          (r) => r.id === action.payload.id
        );
        if (index !== -1) {
          state.rewards[index] = action.payload;
        }
      })
      .addCase(removeReward.fulfilled, (state, action) => {
        state.rewards = state.rewards.filter((r) => r.id !== action.payload);
      });
  },
});

// Export actions and selectors
export const { redeemReward } = rewardsSlice.actions;
export const selectAllRewards = (state) => state.rewards.rewards;
export default rewardsSlice.reducer;
