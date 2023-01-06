export type ProfileStateType = {}
export type ProfileActionsType = {type: 'TEST'}


const initialState = {} as ProfileStateType

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        default: return state
    }
}