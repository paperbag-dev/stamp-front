import { Actions } from './actions';
import { TestModuleState } from './types';


const initialState: TestModuleState = {
  numberItem: 1,
  listItems: [],
};

export default function reducer(state: TestModuleState = initialState, action: { type: String, payload: any }): TestModuleState {
  switch (action.type) {
    case Actions.INCREASE_NUMBER_ITEM: {
      return {
        ...state,
        numberItem: state.numberItem + action.payload,
      };
    }
    case Actions.APPEND_LIST_ITEM: {
      return {
        ...state,
        listItems: [
          ...state.listItems,
          action.payload,
        ]
      };
    }
    default:
      return state;
  }
}
