import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LaundryCard from '../LaundryCard/LaundryCard';
import './DryerPage.css'
function DryerPage(props) {
    let washerSetOne = props.washers.slice(0,4)
    let washerSetTwo = props.washers.slice(4,8)
    let washerSetThree = props.washers.slice(8,12)
  return (
    <div className='DryerPage'>
      
        


        <h2>Floor 2</h2>
      <div className='Floor'>
        
        {washerSetOne.map((currentWasher)=>(
            <div className='card'>
                <LaundryCard id={currentWasher.id.substring(1)}/>
            </div>
        ))}
      </div>
      <h2>Floor 4</h2>
      <div className='Floor'>
        
        {washerSetTwo.map((currentWasher)=>(
            <div className='card'>
                <LaundryCard id={parseFloat(currentWasher.id.substring(1)) % 4 ==0 ? currentWasher.id.substring(1) % 4 + 4: currentWasher.id.substring(1) % 4}/> 
            </div>
        ))}
      </div>
      <h2>Floor 6</h2>
      <div className='Floor'>
        
        {washerSetThree.map((currentWasher)=>(
            <div className='card'>
                <LaundryCard id={parseFloat(currentWasher.id.substring(1)) % 4 ==0 ? currentWasher.id.substring(1) % 4 + 4: currentWasher.id.substring(1) % 4}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DryerPage
