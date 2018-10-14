// @flow

import React, { Component } from 'react';
import BogoImage from './BogoImage';
import type { Bogo } from '../data/Bogo';

type Props = {
}

type State = {
  bogo: Bogo,
}

type TextChangeEvent = {
  target: {
    value: string,
  }
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      bogo: {
        text: 'Build-a-Bogo',
        backgroundColor: 'red',
        textColor: 'white',
      }
    }
  }

  onChangeText = (event: TextChangeEvent) => {
    const { value } = event.target;

    this.setState({
      bogo: {
        ...this.state.bogo,
        text: value,
      }
    })
  }
  
  render = () => (
    <div className='app'>
      <BogoImage bogo={this.state.bogo} />
      <div className='customize'>
        <input
          type='text'
          value={this.state.bogo.text}
          onChange={this.onChangeText} />
      </div>
    </div>
  )
}

export default App;