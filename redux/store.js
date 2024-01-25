import { configureStore } from '@reduxjs/toolkit'
import createCampaignReducer from './slices/createCampaignSlice'

export const store = configureStore({
    reducer: {
        createdCampaign: createCampaignReducer,
    }
})