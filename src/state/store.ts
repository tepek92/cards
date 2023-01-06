import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AuthActionsType, authReducer} from "./reducers/auth-reducer";
import {AppActionsType, appReducer} from "./reducers/app-reducer";
import {ProfileActionsType, profileReducer} from "./reducers/profile-reducer";

type AnyAction = AppActionsType | AuthActionsType | ProfileActionsType

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

