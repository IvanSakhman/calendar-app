import React, { Component } from 'react';
import Content from '../Content/Content';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <div>
            <Content>
                { children }
            </Content>
        </div>
    );
  }
}

export default App;
