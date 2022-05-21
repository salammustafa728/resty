import React, { useEffect, useState, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Formm from "./Component/Form";
import Results from "./Component/Results";
import History from "./Component/History/index";
import Help from "./Component/Help";
import axios from "axios";
import "./App.scss";
import reducer,{newDataSearch} from "./Readucer";

const initialState = {
  request: [],
};

const App = () => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const [data, setData] = useState(null);
  const [reqData, setRequest] = useState({});
  const [isLoading, setLoading] = useState(false);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const handleApiCall = async (reqData) => {
    setRequest(reqData);

    let methodType = reqData.method.toLowerCase();
    const response = await axios[methodType](
      reqData.url,
      reqData.body ? reqData.body : null
    );
    const result = {
      headers: response.headers,
      resultsData: response.data,
    };
    setData(result);
    dispatch(newDataSearch(reqData, result));
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
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
      <br />
      <Formm
        handleApiCall={handleApiCall}
        isLoading={isLoading}
        handleClick={handleClick}
      />
      <br />
      <br />
      <History
        data={data}
        handleApiCall={handleApiCall}
        history={state.request}
        isLoading={isLoading}
        handleClick={handleClick}
      />
      <Results
        data={data}
        url={reqData.url}
        method={reqData.method}
        isLoading={isLoading}
        handleClick={handleClick}
      />
      <Footer />
      </Route>
        <Route path="/help">
          <Help/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
};

export default App;
