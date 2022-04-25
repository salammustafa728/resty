import React from "react";
import Form from "react-bootstrap/Form";
import '../main.css';

const Formm = (props) => {
    let handleSubmit = (e) =>{
        e.preventDefault();
        let formdata = {
            method: "GET",
            url: "http://www.url.com"
        };
        props.handleApiCall(formdata);
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
          <label>
          <Form.Control className="input" type="text" placeholder="http://api.url.here" />
        <button type="submit">
          GO!
        </button>
          </label>
          <br/>
          <br/>
      <label className="methods">
     
          <span id="get">GET</span>
          <span id="post"> POST</span>
          <span id="put">PUT</span>
          <span id="del">DELETE</span>

      </label>
      </Form>
      
    </div>
  );
};

export default Formm;
