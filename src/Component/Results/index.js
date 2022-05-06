import React from 'react'
import "./Result.scss"
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';
const Results = (props) => {
  return (
    <div className='result' data-testid="results" >
       {props.isLoading ? 'Loading…' :   <JSONPretty data={props.data} theme={JSONPrettyMon}></JSONPretty> }
    </div>
  )
}

export default Results