import React from 'react'
import "./Result.scss"

const Results = (props) => {
  return (
    <div className='result' data-testid="results" >
       {props.isLoading ? 'Loading…' :   <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>}
    </div>
  )
}

export default Results