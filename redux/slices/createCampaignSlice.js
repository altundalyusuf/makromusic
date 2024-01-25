import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    createdCampaign: null,
}

export const createCampaignSlice = createSlice({
    name: 'createCampaign',
    initialState,
    reducers: {
        saveCreatedCampaign: (state, action) => {
            state.createdCampaign = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { saveCreatedCampaign } = createCampaignSlice.actions

export default createCampaignSlice.reducer