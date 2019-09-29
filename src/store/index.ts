import { combineReducers } from 'redux';
import testModule from './testModule/reducer';
import { TestModuleState } from './testModule/types';

export interface StoreState {
    testModule: TestModuleState;
}

export default combineReducers<StoreState>({
  testModule,
});
