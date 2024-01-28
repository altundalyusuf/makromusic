import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeForm: 'form1',
    createdCampaign: null,
    pieceName: null,
    noPieceChecked: false,
    region: null,
    genres: null,
}

export const createCampaignSlice = createSlice({
    name: 'createCampaign',
    initialState,
    reducers: {
        changeNavbar: (state, action) => {
            state.activeForm = action.payload;
        },
        saveCreatedCampaign: (state, action) => {
            state.createdCampaign = action.payload;
        },
        savePieceInfo: (state, action) => {
            state.pieceName = action.payload.pieceName;
            state.noPieceChecked = action.payload.noPieceChecked;
        },
        saveRegionAndGenres: (state, action) => {
            state.genres = action.payload.genres;
            state.region = action.payload.region;
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeNavbar, saveCreatedCampaign, savePieceInfo, saveRegionAndGenres } = createCampaignSlice.actions

export default createCampaignSlice.reducer