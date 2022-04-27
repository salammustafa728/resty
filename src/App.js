import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Formm from "./Component/Form";
import Results from "./Component/Results";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [data, setData] = useState(null);
  const [reqData, setRequest] = useState({});
  const [isLoading, setLoading] = useState(false);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const handleApiCall = async (reqData) => {
    setRequest(reqData);

    let methodType = reqData.method.toLowerCase();
    const response = await axios[methodType](reqData.url, (reqData.body) ? (reqData.body) : null);
    const result = {
      resultsData: response.data,
    };
    setData(result);
  };
  const handleClick = () => setLoading(true);
  
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  return (
    <div>
      <Header />

      {/* <div>Request Method: {reqData.method}</div>
      <div>URL : {reqData.url}</div> */}
      <br />
      <Formm handleApiCall={handleApiCall} isLoading={isLoading} handleClick={handleClick} />
      <br />
      <br />
      
      <Results data={data} isLoading={isLoading} handleClick={handleClick} />
      <Footer />
    </div>
  );
};

export default App;
