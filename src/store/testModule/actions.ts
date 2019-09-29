import { createAction } from 'redux-actions';
import { ListItem } from './types'

export enum Actions {
  INCREASE_NUMBER_ITEM = 'testModule/INCREASE_NUMBER_ITEM',
  APPEND_LIST_ITEM = 'testModule/APPEND_LIST_ITEM',
}

export const increaseNumberItem = createAction(Actions.INCREASE_NUMBER_ITEM, (payload: number) => payload);
export const appendListItem = createAction(Actions.APPEND_LIST_ITEM, (payload: ListItem) => payload);
