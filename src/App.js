import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Formm from './Component/Formm';
import Results from './Component/Results';

export class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      reqData: {},
    };
  }

  apiData = (reqData) => {
    // mock output
    const data = {
      resData: [
        { name: 'test data 1', url: ' http://www.url.com' },
      ],
    };
    
    this.setState({ data, reqData });
  }
  render() {
    return (
      <div>
         <Header />
        <div>Request Method: {this.state.reqData.method}</div>
        <div>URL :  {this.state.reqData.url}</div>
        <br/>
        <Formm handleApiCall={this.apiData} />
        <br/>
        <br/>
        <Results data={this.state.data} />
        <Footer />
      </div>
    )
  }
}

export default App