import {createReducer} from "common/utils/reducerUtils";

import {
    PILOT_SELECT,
    PILOT_EDIT_START,
    PILOT_EDIT_STOP,
} from "./pilotsConstants";


const initialState = {
    currentPilot : null,
    isEditing : false,
};

export function selectPilot(state, payload) {
    
    const prevSelectedPilot = state.currentPilot;
    const newSelectedPilot = payload.currentPilot;

    const isSamePilot = prevSelectedPilot === newSelectedPilot;
    
    return {
        ...state,
        // Deselect entirely if it's a second click on the same pilot,
        // otherwise go ahead and select the one that was clicked
        currentPilot : isSamePilot ? null : newSelectedPilot,
        isEditing : false,
    };
}

export function startEditingPilot(state, payload) {
    return {
        ...state,
        isEditing : true,
    }
}

export function stopEditPilot(state, payload) {
    return {
        ...state,
        isEditing : false,
    }
}

export default createReducer(initialState, {
    [PILOT_SELECT] : selectPilot,
    [PILOT_EDIT_START] : startEditingPilot,
    [PILOT_EDIT_STOP] : stopEditPilot,
});