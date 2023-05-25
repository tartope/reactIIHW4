import React from 'react'
import { useState } from 'react'

export const Form = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`Hello ${fName} ${lName}!`)
    }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='First name' value={fName} onChange={e=>{setFName(e.target.value)}}/>
            <br/>
            <input type="text" placeholder='Last name'value={lName} onChange={e=>{setLName(e.target.value)}}/>
            <br/>
            <input type="submit" />
        </form>
    </div>
  )
}
