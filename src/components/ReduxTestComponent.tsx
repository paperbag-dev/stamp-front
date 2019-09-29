import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StoreState } from 'store';
import { ListItem } from 'store/testModule/types';
import { increaseNumberItem } from 'store/testModule/actions';

interface OwnProps {
}

interface StateProps {
  numberItem: number,
  listItems: ListItem[],
}

interface DispatchProps {
  increaseNumberItem: typeof increaseNumberItem,
}

interface State {
}

type Props = OwnProps & DispatchProps & StateProps;

class ReduxTestComponent extends Component<Props, State> {
  increaseNumber = (number:number) => (event:any) => {
    this.props.increaseNumberItem(number);
  };

  render() {
    return (
      <div>
        <h1>리덕스 테스트 컴포넌트</h1>
        <div>numberItem: <span>{ this.props.numberItem }</span></div>
        <button onClick={this.increaseNumber(3)}>3증가</button>
      </div>
    )
  }
}

const mapStateToProps = (state:StoreState):StateProps => ({
  numberItem: state.testModule.numberItem,
  listItems: state.testModule.listItems,
});

const mapDispatchToProps = (dispatch:Function):DispatchProps => ({
  increaseNumberItem: (number:number) => dispatch(increaseNumberItem(number)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTestComponent);
