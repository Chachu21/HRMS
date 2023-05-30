import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 const fetchVacancyType = createAsyncThunk(
  "vacancy/fetchVacancyType",
  async () => {
    const response = await axios.get("http://localhost:5002/api/v1/vacancy");
    return response.data;
  }
);

 const addVacancyType = createAsyncThunk(
  "vacancy/addVacancyType",
  async (vacancyTypeData) => {
    const response = await axios.post(
      "http://localhost:5002/api/v1/vacancy",
      vacancyTypeData
    );
    return response.data;
  }
);

 const deleteVacancyType = createAsyncThunk(
  "vacancy/deleteVacancyType",
  async (id) => {
    await axios.delete(`http://localhost:5002/api/v1/vacancy/${id}`);
    return id;
  }
);

 const updateVacancyType = createAsyncThunk(
  "vacancy/updateVacancyType",
  async ({ id, vacancyTypeData }) => {
    const response = await axios.put(
      `http://localhost:5002/api/v1/vacancy/${id}`,
      vacancyTypeData
    );
    return response.data;
  }
);

const initialState = {
  vacancyType: [],
  loading: false,
  error: null,
};

const vacancyTypeSlice = createSlice({
  name: "equb",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancyType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVacancyType.fulfilled, (state, action) => {
        state.loading = false;
        state.vacancyType = action.payload;
      })
      .addCase(fetchVacancyType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addVacancyType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addVacancyType.fulfilled, (state, action) => {
        state.loading = false;
        state.vacancyType.push(action.payload);
      })
      .addCase(addVacancyType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteVacancyType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVacancyType.fulfilled, (state, action) => {
        state.loading = false;
        state.vacancyType = state.vacancyType.filter(
          (equb) => equb.id !== action.payload
        );
      })
      .addCase(deleteVacancyType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateVacancyType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVacancyType.fulfilled, (state, action) => {
        state.loading = false;
        const updatedEqub = action.payload;
        const index = state.vacancyType.findIndex(
          (equb) => equb.id === updatedEqub.id
        );
        if (index !== -1) {
          state.vacancyType[index] = updatedEqub;
        }
      })
      .addCase(updateVacancyType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchVacancyType, addVacancyType, deleteVacancyType, updateVacancyType };

export default vacancyTypeSlice.reducer;
