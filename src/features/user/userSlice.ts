import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding.ts';

type Position = {
  latitude: number;
  longitude: number;
};

type FetchAddressPayload = {
  position: Position;
  address: string;
};

type UserState = {
  username: string;
  status: 'idle' | 'loading' | 'error';
  position: Position | null;
  address: string;
  error: string;
};

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Thunk for async function.
export const fetchAddress = createAsyncThunk<FetchAddressPayload>('user/fetchAddress', async function () {
  // Get the user's geolocation position.
  const positionObj = await getPosition();
  const position: Position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // A reverse geocoding API to get a description of the user's address.
  // Display it in the order form, so that the user can correct it if wrong.
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // Payload of the fulfilled state.
  return { position, address };
});

const initialState: UserState = {
  username: '',
  status: 'idle',
  position: null,
  address: '',
  error: 'There was a problem getting your address. Make sure to fill this field.'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
  // Handle async functions.
  extraReducers: (builder) => {
    builder
        .addCase(
            fetchAddress.pending,
            (state: UserState) => {
              state.status = 'loading';
            }
        )
        .addCase(
            fetchAddress.fulfilled,
            (state: UserState, action) => {
              state.status = 'idle';
              state.position = action.payload.position;
              state.address = action.payload.address;
            }
        )
        .addCase(
            fetchAddress.rejected,
            (state: UserState, action) => {
              state.status = 'error';
              // TODO
              state.error = action.error.message;
            }
        );
  }
});

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;
