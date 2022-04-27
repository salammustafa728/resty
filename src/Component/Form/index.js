import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Form.scss";

const Formm = (props) => {
  const [url, setUrl] = useState();
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState();

  const handleMethod = (e) => {
    setMethod(e.target.id);
  };
  const handleBody = (e) => {
    e.preventDefault();
    let newBody = e.target.value;
    setBody(newBody);
  };
  const handleUrl = (e) => {
    e.preventDefault();
    let newUrl = e.target.value;
    setUrl(newUrl);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let formdata = {
      method: method,
      url: url,
      body: null,
    };
    if (body) formdata.body = body;
    props.handleApiCall(formdata);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          <p className="title">URL: {url} </p>
          <p className="title">Method: {method}</p>
          <Form.Control
            className="input"
            type="text"
            placeholder="http://api.url.here"
            onChange={handleUrl}
          />
          <button
            type="submit"
            className="btn-go"
            onClick={!props.isLoading ? props.handleClick : null}
            data-testid="button"
          >
            Go!
          </button>
        </label>
        <br />
        <br />
        <label className="methods">
          <span id="get" onClick={handleMethod}>
            GET
          </span>
          <span id="post" onClick={handleMethod}>
            {" "}
            POST
          </span>
          <span id="put" onClick={handleMethod}>
            PUT
          </span>
          <span id="delete" onClick={handleMethod}>
            DELETE
          </span>
        </label>
        <div>
          {method === "post" || method === "put" ? (
            <div className="textareaLabel">
              <label className="" htmlFor="json">
                Write the body here ...
              </label>
              <br />
              <textarea
                onChange={handleBody}
                type="textarea"
                id="textdata"
                defaultValue="{}"
              />
            </div>
          ) : null}
        </div>
      </Form>
    </div>
  );
};

export default Formm;
