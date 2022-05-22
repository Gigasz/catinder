import api from 'services/api';
import { AppDispatch } from 'store';
import {
  CatsListActionTypes,
} from 'store/types/cats-list-types';

export const fetchInitialCatList = (
  onSuccess: () => void,
  onFailure: () => void,
) => async (dispatch: AppDispatch) => {
  dispatch({
    type: CatsListActionTypes.FETCH_INITIAL_LIST,
  });

  try {
    const { data } = await api.get('/images/search', {
      params: {
        size: 'med',
        page: 0,
        limit: 50,
      },
    });

    dispatch({
      type: CatsListActionTypes.FETCH_INITIAL_LIST_SUCCESS,
      payload: { cats_list: data },
    });
    onSuccess();
  } catch (error) {
    dispatch({
      type: CatsListActionTypes.FETCH_INITIAL_LIST_FAILURE,
    });
    onFailure();
  }
};

export const fetchMoreCats = (page: number) => async (dispatch: AppDispatch) => {
  dispatch({
    type: CatsListActionTypes.FETCH_MORE,
  });
  try {
    const { data } = await api.get('/images/search', {
      params: {
        size: 'full',
        page,
        limit: 30,
      },
    });

    dispatch({
      type: CatsListActionTypes.FETCH_MORE_SUCCESS,
      payload: { cats_list: data },
    });
  } catch (e) {
    dispatch({
      type: CatsListActionTypes.FETCH_MORE_FAILURE,
    });
  }
};
