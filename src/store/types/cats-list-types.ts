export enum CatsListActionTypes {
  FETCH_INITIAL_LIST = 'FETCH_INITIAL_LIST',
  FETCH_INITIAL_LIST_SUCCESS = 'FETCH_INITIAL_LIST_SUCCESS',
  FETCH_INITIAL_LIST_FAILURE = 'FETCH_INITIAL_LIST_FAILURE',

  FETCH_MORE = 'FETCH_MORE',
  FETCH_MORE_SUCCESS = 'FETCH_MORE_SUCCESS',
  FETCH_MORE_FAILURE = 'FETCH_MORE_FAILURE',
}

type CatProfile = {
  id: string;
  url: string;
  name: string;
};

export interface CatsListState {
  loading_initial: boolean;
  loading_more: boolean;
  cats_list: CatProfile[];
}

export interface CatsListStoreAction {
  type: CatsListActionTypes;
  payload?: Partial<CatsListState>
}
