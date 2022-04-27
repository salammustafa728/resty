import React, { useState } from 'react'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Formm from './Component/Formm';
import Results from './Component/Results';

const App = () => {
  const [data, setData] = useState(null);
  const [reqData, setRequest] = useState({});

  const handleApiCall = (reqData) =>{
    setRequest(reqData);
      // mock output
       const result = {
        resData: [
          { name: 'test data 1', url: ' http://www.url.com' },
        ],
      };
      setData(result)
  }

  return (
    <div>
        <Header />
        
        <div>Request Method: {reqData.method}</div>
        <div>URL :  {reqData.url}</div>
        <br/>
        <Formm handleApiCall={handleApiCall} />
        <br/>
        <br/>
        <Results data={data} />
        <Footer />
    </div>
  )
}

export default App