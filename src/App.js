import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import BurguerBUilder from './containers/BurguerBUilder/BurguerBuilder'

class App extends Component {
  render() {
    return (
      <div >
		  <Layout> 
			  <BurguerBUilder />
		  </Layout>
      </div>
    );
  }
}

export default App;
