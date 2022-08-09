import React from 'react'
import './CurrentDate.css'

function CurrentDate() {
    const fName = "Avinash";
    const mName = "Ramdas";
    const lName = "Gavandhe";
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
  return (
    <div className='outer'>
        <h1 id='name'>Hello I am {fName} {mName} {lName}</h1>
        <p id='date'>Today's Date is {currDate}</p>
        <p id='time'>Current Time is {currTime}</p>
    </div>
  )
}

export default CurrentDate