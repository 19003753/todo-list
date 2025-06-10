import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// URL del backend
const API_URL = "http://localhost:3000";
const API_KEY = "123@";

// Obtener metas
export const fetchGoals = createAsyncThunk("goals/fetchGoals", async () => {
  const res = await axios.get(`${API_URL}/getGoals`, {
    headers: { Authorization: API_KEY },
  });
  return res.data;
});

// Agregar meta
export const addGoal = createAsyncThunk("goals/addGoal", async (goal) => {
  const res = await axios.post(
    `${API_URL}/addGoal`,
    { goal },
    { headers: { Authorization: API_KEY } }
  );
  return res.data.goal; //
});

// Eliminar meta
export const removeGoal = createAsyncThunk(
  "goals/removeGoal",
  async (goalId) => {
    const res = await axios.delete(`${API_URL}/removeGoal`, {
      headers: { Authorization: API_KEY },
      data: { id: goalId },
    });
    return res.data.goal;
  }
);

const goalSlice = createSlice({
  name: "goals",
  initialState: {
    goals: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGoals.fulfilled, (state, action) => {
        state.loading = false;
        state.goals = action.payload;
      })
      .addCase(fetchGoals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addGoal.fulfilled, (state, action) => {
        state.goals.push(action.payload);
      })
      .addCase(removeGoal.fulfilled, (state, action) => {
        state.goals = state.goals.filter((g) => g._id !== action.payload._id);
      });
  },
});

export default goalSlice.reducer;
