import {
  CatsListActionTypes,
  CatsListState,
  CatsListStoreAction,
} from 'store/types/cats-list-types';

const INITIAL_STATE: CatsListState = {
  cats_list: [],
  loading_initial: false,
  loading_more: false,
};

export default (state = INITIAL_STATE, action: CatsListStoreAction): CatsListState => {
  switch (action.type) {
    case CatsListActionTypes.FETCH_INITIAL_LIST:
      return {
        ...state,
        loading_initial: true,
      };
    case CatsListActionTypes.FETCH_INITIAL_LIST_FAILURE:
      return {
        ...state,
        loading_initial: false,
      };
    case CatsListActionTypes.FETCH_INITIAL_LIST_SUCCESS:
      return {
        ...state,
        loading_initial: false,
        cats_list: action.payload?.cats_list || [],
      };

    default:
      return state;
  }
};
