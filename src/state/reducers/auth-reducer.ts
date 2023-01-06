export type AuthStateType = {};
export type AuthActionsType = {type: 'TEST'}

const initialState = {} as AuthStateType;

export const authReducer = (state = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        default: return state
    }
}