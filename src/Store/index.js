import { configureStore } from '@reduxjs/toolkit'
import {userSlice} from './userreducer'

export const store = configureStore({
  reducer: {
    users:userSlice.reducer
  },
})