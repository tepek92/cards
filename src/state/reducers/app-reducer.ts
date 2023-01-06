export type AuthStateType = {}
export type AppActionsType = {type: 'TEST'}


const initialState = {} as AuthStateType

export const appReducer = (state = initialState, action: AppActionsType): AuthStateType => {
    switch (action.type) {
        default: return state
    }
}