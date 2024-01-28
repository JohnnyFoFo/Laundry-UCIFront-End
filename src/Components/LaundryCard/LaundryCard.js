import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import WasherOpen from '../../Images/WasherOpen.svg';
import WasherInUse from '../../Images/WasherInUse.svg'
import WasherBroken from '../../Images/WasherBroken.svg'

import DryerOpen from '../../Images/OpenDryer.svg'
import DryerInUse from '../../Images/DryerInUse.svg'
import DryerBroken from '../../Images/DryerBroken.svg'

import CardMedia from '@mui/material/CardMedia';


import './LaundryCard.css'

export default function LaundryCard(props) {

  function findImage(){
    if (props.laundryType == 'Washer'){
        if (props.broken){
          return WasherBroken
        }
        else{
          if (props.endTime == null){
              return WasherOpen
          }
          else{
              return WasherInUse
          }
        }
    }
    else{
      if (props.broken){
          return DryerBroken
      }
      else{
        if (props.endTime == null){
            return DryerOpen
        }
        else{
          return DryerInUse
        }
      }
    }
  }

  
    return (
    <div onClick={()=> props.onclick([props.laundryType == 'Washer',props.id.substring(0,1),props.id.substring(1)])}>
      <Card sx={{ minWidth: 50 }} className='LaundryCard'>
        <CardContent>

          <Typography variant="h5" component="div">
            {`${props.laundryType} ${props.id}`}
          </Typography>
          
          <CardMedia
          component="img"
          height="140"
          image={findImage()}
          alt="green iguana"
          className='laundryImage'
        />
        <Typography variant="h5" component="div" color={props.broken ? 'red': props.endTime == null ? 'green': 'yellow'}>
        {props.broken ? 'Broken': props.endTime == null ? 'Open': 'In Use'}
          </Typography>
    
        
        </CardContent>
        
       
        

      </Card>
    </div>
 
  );
}