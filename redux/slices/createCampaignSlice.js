import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    createdCampaign: null,
    pieceName: null,
    noPieceChecked: false,
}

export const createCampaignSlice = createSlice({
    name: 'createCampaign',
    initialState,
    reducers: {
        saveCreatedCampaign: (state, action) => {
            state.createdCampaign = action.payload;
        },
        savePieceInfo: (state, action) => {
            state.pieceName = action.payload.pieceName;
            state.noPieceChecked = action.payload.noPieceChecked;
        }
    },
})

// Action creators are generated for each case reducer function
export const { saveCreatedCampaign, savePieceInfo } = createCampaignSlice.actions

export default createCampaignSlice.reducer