import React from "react";
import "./History.scss";


const History = (props) => {
  return (
    <div>
      <h2 className="h2Title">History Data: </h2>
      <ul className="ulData">
        {props.history &&
          props.history.map((data, idx) => {
            return (
              <div key={idx}>
                <li className="li-color">
                  Method: {data.method}
                  <br />
                  <b>URL: </b> {data.url}
                  <br />
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default History;
