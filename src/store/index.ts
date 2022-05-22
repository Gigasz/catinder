import {
  combineReducers,
  applyMiddleware,
  createStore,
  Store,
} from 'redux';

import ReduxThunk from 'redux-thunk';

import catsListState from './state/cats-list-state';
import { CatsListState } from './types/cats-list-types';

const rootReducer = combineReducers({
  catsListState,
});

interface ApplicationState {
  catsListState: CatsListState
}

const store: Store<ApplicationState> = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
