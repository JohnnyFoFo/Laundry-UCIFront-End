import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LaundryCard from '../LaundryCard/LaundryCard';
import './LaundryPage.css'

function LaundryPage(props) {
    let washerSetOne = props.washers.slice(0,4)
    let washerSetTwo = props.washers.slice(4,8)
    let washerSetThree = props.washers.slice(8,12)
    


  return (
    <div className={'LaundryPage'}>
      <h1>{props.towerName}</h1>
        


        <h2>Floor 2</h2>
      <div className='Floor'>
        
        {washerSetOne.map((currentWasher)=>(
            <div className='card'>
                <LaundryCard id={currentWasher.id.substring(1)} laundryType='Washer' onclick={props.onclick} broken={currentWasher.broken} endTime={currentWasher.endTime} />
            </div>
        ))}
      </div>
      <h2>Floor 4</h2>
      <div className='Floor'>
        
        {washerSetTwo.map((currentWasher)=>(
            <div className='card'>
                <LaundryCard id={parseFloat(currentWasher.id.substring(1)) % 4 ==0 ? currentWasher.id.substring(1) % 4 + 4: currentWasher.id.substring(1) % 4} laundryType='Washer' onclick={props.onclick} broken={currentWasher.broken} endTime={currentWasher.endTime}  /> 
            </div>
        ))}
      </div>
      <h2>Floor 6</h2>
      <div className='Floor'>
        
        {washerSetThree.map((currentWasher)=>(
            <div className='card'>
                <LaundryCard id={parseFloat(currentWasher.id.substring(1)) % 4 ==0 ? currentWasher.id.substring(1) % 4 + 4: currentWasher.id.substring(1) % 4} laundryType='Washer' onclick={props.onclick} broken={currentWasher.broken} endTime={currentWasher.endTime} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default LaundryPage
