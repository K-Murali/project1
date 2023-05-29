import React from 'react'

export default function Alerts(props) {

  return (
    <div style={{height: '50px'}}>
    {props.alert&&
    <div className='container'>

<div className={`alert alert-${props.alert.color} alert-dismissible " role="alert"`}>
  {props.alert.msg} 
  
</div>

    </div>} 
    </div>
  )
}
