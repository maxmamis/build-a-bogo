// @flow

import React, { Component } from 'react';

type Props = {
  title: string,
}

const App: Props => React$Element<any>
= ({ title }) => (
  <div class='stupidclass'>{title}</div>
)

export default App;