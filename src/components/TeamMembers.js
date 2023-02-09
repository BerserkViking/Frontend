import React from 'react'
import {useNavigate} from 'react-router-dom'

export const TeamMembers = () => {
    const Navigate = useNavigate();
    return (
    <table>
        <tr>
             <td>Member 1</td>
             <td><input type='text' placeHolder='Name' ></input></td> 
             <td><input type='text' placeHolder='Email' ></input></td>
        </tr>
        <tr>
            <td>Member 2</td>
            <td><input type='text' placeHolder='Name'></input></td>
            <td><input type='text' placeHolder='email'></input></td>
        </tr>
        <tr>
            <td>Member 3</td>
            <td><input type='text' placeHolder='Name'></input></td>
            <td><input type='text' placeHolder='email'></input></td>
        </tr>
        <tr>
            <td>Member 4</td>
            <td><input type='text' placeHolder='Name'></input></td>
            <td><input type='text' placeHolder='email'></input></td>
        </tr>
        <button onClick={()=>Navigate('/registration-form')}>Back</button>
        <button onClick={()=>Navigate('/register-final')}>Save & Next</button>
    </table>
  )
}
