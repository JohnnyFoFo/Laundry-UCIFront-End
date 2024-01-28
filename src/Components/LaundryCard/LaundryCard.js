import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Washingmachineimage from '../../Images/WashingMachine.svg'
import './LaundryCard.css'

export default function LaundryCard(props) {
  return (
    <div onClick={()=> props.onclick}>
      <Card sx={{ minWidth: 50 }} className='LaundryCard'>
        <CardContent>

          <Typography variant="h5" component="div">
            {`Washer ${props.id}`}
          </Typography>
        {/* <img src={Washingmachineimage} className='washingmachineimage'></img> */}
        </CardContent>
        <CardActions>
        </CardActions>
      
      </Card>
    </div>
 
  );
}