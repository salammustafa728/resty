import React from 'react'

const Results = (props) => {
  return (
    <div>
         <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </div>
  )
}

export default Results